import './App.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Route, Switch} from "react-router-dom";
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import Posts from './components/pages/Posts';
import Header from './components/pages/Header';
import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return(
    <>
    <Header  toggle={toggle} />
    <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route  path="/posts" component={Posts} /> 
        <Route  path="*" component={PageNotFound} /> 
  </Switch>
  </>
  )}
export default App;
