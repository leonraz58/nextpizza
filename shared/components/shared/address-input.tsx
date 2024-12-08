'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="cf19984cbcb5eb712304f6b0fd53650f2af5ef8e"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
