import React from 'react';
import {} from 'lodash';
import i18n from 'i18n-js';
import {enLanguage as en, viLanguage as vi} from '@resources';

export type Keys = keyof typeof en;
export type LanguageTag = 'en' | 'vi';

const translationGetters = {
  en,
  vi,
};
