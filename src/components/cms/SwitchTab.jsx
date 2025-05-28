import DisplayItem from './DisplayItem'
import AddItem from './AddItem';

// Below is example for Conditional rendering
export default function SwitchTab({ tab }) {
  switch(tab) {
    case "display":
        return <DisplayItem/>;
    case "add":
        return <AddItem/>;
  }
}
