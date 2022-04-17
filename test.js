if (parseInt(React.version.split(".")[0]) >= 18) {
  console.log("React 18 detected");
  if (reconcilerRoot.current) {
    console.log("Rerendering Canvas");
    reconcilerRoot.current.configure(
      __assign(__assign({}, props), {
        dpr: dpr || props.dpr,
        size: size,
        events: events$1 || events,
      })
    );
    reconcilerRoot.current.render(
      React.createElement(
        ErrorBoundary,
        { set: setError },
        React.createElement(
          React.Suspense,
          { fallback: React.createElement(Block, { set: setBlock }) },
          React.createElement(
            MotionCanvasContext.Provider,
            {
              value: {
                dimensions: dimensions,
                layoutCamera: layoutCamera,
                requestedDpr: calculateDpr(props.dpr),
              },
            },
            React.createElement(
              MotionConfigContext.Provider,
              { value: configContext },
              React.createElement(
                MotionContext.Provider,
                { value: motionContext },
                children
              )
            )
          )
        )
      )
    );
  } else {
    console.log("Initial createRoot Canvas");

    reconcilerRoot.current = createRoot(canvasRef.current);
  }
} else {
  render(
    React.createElement(
      ErrorBoundary,
      { set: setError },
      React.createElement(
        React.Suspense,
        { fallback: React.createElement(Block, { set: setBlock }) },
        React.createElement(
          MotionCanvasContext.Provider,
          {
            value: {
              dimensions: dimensions,
              layoutCamera: layoutCamera,
              requestedDpr: calculateDpr(props.dpr),
            },
          },
          React.createElement(
            MotionConfigContext.Provider,
            { value: configContext },
            React.createElement(
              MotionContext.Provider,
              { value: motionContext },
              children
            )
          )
        )
      )
    ),
    canvasRef.current,
    __assign(__assign({}, props), {
      dpr: dpr || props.dpr,
      size: size,
      events: events$1 || events,
    })
  );
}
