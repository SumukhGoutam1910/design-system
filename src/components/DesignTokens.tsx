import React from 'react';

const spacing = [
  { name: 'Spacing XS', size: '4px', className: 'h-1' },
  { name: 'Spacing SM', size: '8px', className: 'h-2' },
  { name: 'Spacing MD', size: '16px', className: 'h-4' },
  { name: 'Spacing LG', size: '24px', className: 'h-6' },
  { name: 'Spacing XL', size: '32px', className: 'h-8' },
];

const typography = [
  { name: 'Heading 1', className: 'text-4xl font-bold', sample: 'The quick brown fox' },
  { name: 'Heading 2', className: 'text-2xl font-semibold', sample: 'The quick brown fox' },
  { name: 'Body Text', className: 'text-base', sample: 'The quick brown fox' },
  { name: 'Caption', className: 'text-sm text-gray-600 dark:text-white/70', sample: 'The quick brown fox' },
];

export const DesignTokens = () => {
  return (
    <section className="max-w-3xl mx-auto space-y-10 mt-20">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        📏 Spacing Tokens
      </h1>
      <div className="space-y-4">
        {spacing.map((s) => (
          <div key={s.name} className="flex items-center gap-4">
            <div className={`bg-indigo-500 w-16 ${s.className}`} />
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">{s.name}</p>
              <p className="text-gray-600 dark:text-white/60 text-sm">{s.size}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center mt-10 mb-4 text-gray-900 dark:text-white">
        🔤 Typography Tokens
      </h1>
      <div className="space-y-4">
        {typography.map((t) => (
          <div key={t.name}>
            <p className="text-gray-900 dark:text-white font-medium">{t.name}</p>
            <p className={`${t.className} bg-gray-100 dark:bg-white/5 p-2 rounded text-gray-900 dark:text-white`}>
              {t.sample}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};