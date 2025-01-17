import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div style={{marginLeft:10,marginRight:10}}>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/cart" component={CartDetail}/>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route path="/saveproduct" component={AddOrUpdateProduct}/>
        <Route path="/product" component={Dashboard}/> 
        <Route component={NotFound}/> 
      </Switch>
    </div>
  );
}

export default App;
