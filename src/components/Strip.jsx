import React from 'react';
import { useTranslation } from 'react-i18next';

const Strip = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-red-600 py-2 px-4 text-white text-sm overflow-hidden relative z-50">
      <div className="animate-scroll flex items-center space-x-8 whitespace-nowrap">
        <span className="text-orange-400 font-bold">{t('updates.newUpdates')}</span>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-orange-400 font-bold">{t('updates.newUpdates')}</span>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-orange-400 font-bold">{t('updates.newUpdates')}</span>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-orange-400 font-bold">{t('updates.newUpdates')}</span>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-orange-400 font-bold">{t('updates.newUpdates')}</span>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-orange-400 font-bold">{t('updates.newUpdates')}</span>
      </div>
    </div>
  );
};

export default Strip; 