type ScreenRendererProps = {
  html: string;
};

export function ScreenRenderer({ html }: ScreenRendererProps) {
  return (
    <section className="screen-html" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
