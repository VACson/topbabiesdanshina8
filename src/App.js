import {
  useAddBabyMutation
} from "./store/babiesAPI";
import * as fs from "fs";

function App() {
  // const [addBaby, { isLoading }] = useAddBabyMutation();
  // const formData = new FormData();
  // formData.append('name', 'Аліна');
  // formData.append('description', 'Нахуй');
  // formData.append('telegram_username', '@ret');
  // formData.append('image', 'https://i.pinimg.com/564x/76/20/cb/7620cb5f80fc48c22404ac81aea4100e.jpg');
  // const click = async () => {
  //   await addBaby({body: formData})
  // }
  // console.log(isLoading);
  return <div className="App">
    {/*<button onClick={click}>Add baby</button>*/}
  </div>;
}

export default App;
