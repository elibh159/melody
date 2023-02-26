import React from 'react';
import { TextErrorProp } from '../../interface/TextErrorType';

export const TextSuccess = ({ children }: TextErrorProp) => (
  <div className="text-success p-3" >
    {children}
  </div>
);