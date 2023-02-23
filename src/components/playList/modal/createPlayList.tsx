import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextError } from "../../custom/TextError";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Row,
  Spinner
} from 'react-bootstrap';
import { createPlayListApi } from '../../../services';

const CreatePlayList = () => {
  const queryClient = useQueryClient();
  const { mutate: mutateCreatePlayList, isLoading, isSuccess, isError, data } = useMutation(createPlayListApi);
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState();
  const handleSubmit = () => {
    const form = new FormData();
    if (cover) {
      form.append('cover', cover);
    }
    form.append('title', title);
    mutateCreatePlayList(form);
  };
  useEffect(() => {
    if (isSuccess) {
      queryClient.setQueryData(['playList'], (oldData: any) => {
        oldData.items.push(data.result);
        return oldData;
      });
    }
  }, [isSuccess]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
  });

  function handleSelectFile(event: any) {

    if (event.target.files) {
      const file = event.target.files[0];

      setCover(file);
    }
  }
  function handleChange(event: any) {
    const title = event.target.value;
    setTitle(title);
  }

  return (
    <div className="p-4">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ title }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <Container className="logo-container">
          </Container>
          <h3>Create Playlist</h3>
          {isLoading && <Spinner color="success" />}
          <InputGroup className="mb-3">
            <div className="input-group">
              <Field
                name="title"
                value={title}
                type="text"
                placeholder="Title"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <ErrorMessage
              name="title"
              component={TextError}
              className="invalid-feedback"
            />
          </InputGroup>
          <InputGroup className="mb-3">

            <Field
              name='cover'
              type='file'
              onChange={handleSelectFile}
              // value={cover}
              accept='image/*'
              className="form-control"
            />
            <ErrorMessage
              name="cover"
              component={TextError}
              className="invalid-feedback"
            />

          </InputGroup>
          <Row>
            <Col md="6" className="d-grid gap-2">
              <Button
                color="primary"
                type="submit"
              >
                save
              </Button>
            </Col>

            <Col md="6">
              {(isSuccess) && <p className="text-success"> PlayList created successfuly!</p>}
              {(isError) && <p className="text-danger"> server error</p>}
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePlayList;
