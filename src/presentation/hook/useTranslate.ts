import React, {useRef} from 'react';
import {memoize} from 'lodash';
import i18n from 'i18n-js';
import {enLanguage as en, viLanguage as vi} from '@resources';

export type Keys = keyof typeof en;
export type LanguageTag = 'en' | 'vi';

const translationGetters = {
  en,
  vi,
};

export const useTranslate = () => {
  const currentLanguage = useRef<Keys | string>();
  const translate = memoize((key: Keys | string) => i18n.t(key));

  const confifTranslation = (languageTag: LanguageTag | string) => {
    if (currentLanguage.current != languageTag && languageTag) {
      currentLanguage.current = languageTag;
      translate.cache.clear();
      i18n.translations = {[languageTag]: translationGetters[languageTag]};
      i18n.locale = languageTag;
    }
  };

  return {translate, confifTranslation};
};
