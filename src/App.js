import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
// import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // this is getting the userAuth object, which is returned back out of createUserProfileDocument
        userRef.onSnapshot((snapshot) => {
          this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } }, () => {
            console.log("auto updated snapshot data", this.state);
          });
        });
      } else {
        this.setState({ currentUser: userAuth }); // this is basically saying, when the user logs out (so uerAuth becomes null), set the currentUser to null.
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
