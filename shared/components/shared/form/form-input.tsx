'use client';

import { Input } from '../../ui/input';
import { ClearButton } from '../clear-button';
import { RequiredSymbol } from '../required-symbol';
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md"  {...props} />

        {<ClearButton />}
      </div>
    </div>
  );
};
