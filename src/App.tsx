import React from "react";
import { Dialog, DialogTitle, Typography, Button } from "@material-ui/core";

type AppProps = {
  hoge: String;
};

const App: React.FC<AppProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [test, setTest] = React.useState("hoge");

  return (
    <>
      <Chil
        onClickButton={(test: string): void => {
          setOpen(true);
          setTest(test);
        }}
      />
      <Dialog
        open={open}
        onClose={(): void => {
          setOpen(false);
        }}
      >
        <DialogTitle>{test}</DialogTitle>
      </Dialog>
    </>
  );
};

type ChilProps = {
  onClickButton?: (test: string) => void | Promise<void>;
};

const Chil: React.FC<ChilProps> = (props) => {
  const { onClickButton = () => {} } = props;

  return (
    <>
      <h1>Hello, World!</h1>
      <Button
        color="primary"
        onClick={(): void => {
          onClickButton("Updated Hoge");
        }}
      >
        開く
      </Button>
    </>
  );
};

// class App extends React.Component<AppProps, {}> {
//   render() {
//     return <h1>Hello, {this.props.hoge}</h1>;
//   }
// }

export default App;
