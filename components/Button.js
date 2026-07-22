export default function Button({ children, href, variant = 'primary', className = '' }) {
  const baseClasses = 'btn';
  const variantClasses = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const classes = [baseClasses, variantClasses, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
