import React, {Fragment} from 'react';
import CustomCard from './component/CustomCard';
 
const App = () => {
  let firstImage = { uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Cones500.jpg'};
  let secondImage = { uri: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg'};
  return (
    <Fragment>
      <CustomCard url={firstImage} title={"First title"}/>
      <CustomCard url={secondImage} title={"Second title"}/>
    </Fragment>
  );
};
export default App;
