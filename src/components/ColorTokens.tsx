import React from 'react';

type TokenProps = {
  name: string;
  description: string;
  className: string;
};

const ColorToken: React.FC<TokenProps> = ({ name, description, className }) => (
  <div className="flex items-center justify-between gap-4 bg-white/5 p-4 rounded-lg shadow-md">
    <div className={`w-12 h-12 rounded ${className}`} />
    <div className="flex-1">
      <p className="text-white font-semibold">{name}</p>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
    <code className="text-xs text-white/40">{className}</code>
  </div>
);

export const ColorTokens: React.FC = () => {
  const tokens: TokenProps[] = [
    { name: 'Primary', description: 'Main brand color', className: 'bg-indigo-500' },
    { name: 'Secondary', description: 'Accent elements', className: 'bg-pink-500' },
    { name: 'Success', description: 'Success state color', className: 'bg-green-500' },
    { name: 'Warning', description: 'Warning/alert color', className: 'bg-yellow-400' },
    { name: 'Error', description: 'Error/danger color', className: 'bg-red-500' },
    { name: 'Info', description: 'Informational messages', className: 'bg-blue-500' },
    { name: 'Surface', description: 'Card & elevated surfaces', className: 'bg-white/10' },
    { name: 'Background', description: 'Main page background', className: 'bg-neutral-900' },
    { name: 'Text Primary', description: 'Main text', className: 'bg-white' },
    { name: 'Text Secondary', description: 'Subtle text', className: 'bg-white/60' },
  ];

  return (
    <section id="colors" className="max-w-3xl mx-auto space-y-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">🎨 Color Tokens</h1>
      {tokens.map((token) => (
        <ColorToken key={token.name} {...token} />
      ))}
    </section>
  );
};
