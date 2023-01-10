import { type TButtonSize, TButtonVariation } from './types';

const buttonSizes: Record<TButtonSize, string> = {
  sm: 'text-sm px-[14px] py-2',
  md: 'text-sm px-4 py-[10px]',
  lg: 'px-[18px] py-[10px]',
  xl: 'px-5 py-3',
  '2xl': 'text-lg px-7 py-4'
};

const buttonBase = 'font-semibold rounded-lg shadow-sm shadow-violet-100/5';

const buttonStyles: Record<TButtonVariation, string> = {
  default: `${buttonBase} text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 ring-violet-100 border border-violet-600`,
  outlined: `${buttonBase} text-black hover:border-gray-400 bg-white focus:ring-4 ring-gray-100 border border-gray-300`
};

const disabledButtonStyles: Record<TButtonVariation, string> = {
  default: `${buttonBase} text-white bg-violet-200 hover:bg-violet-200 cursor-not-allowed border border-violet-200`,
  outlined: `${buttonBase} text-black bg-gray-200 hover:bg-gray-200 border border-gray-300 cursor-not-allowed`
};

// TODO: Icon
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  variation?: TButtonVariation;
}

const Button = ({ className, ...props }: Props) => {
  const size = buttonSizes[props.size ?? 'md'];
  const variation = props.variation ?? 'default';
  let style = props.disabled
    ? disabledButtonStyles[variation]
    : buttonStyles[variation];

  const classes = [size, style, className].join(' ').trim();

  return <button {...props} className={classes} />;
};

export default Button;
