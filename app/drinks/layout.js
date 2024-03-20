const layout = ({children}) => {
  return (
    <div className="mx-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default layout;
