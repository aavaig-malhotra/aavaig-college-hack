import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  People,
  Home,
  QuestionAnswer,
  Search,
  CropFree,
} from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectName,
  selectPhoto,
  setSignIn,
  setSignOut,
} from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const userName = useSelector(selectName);
  const userPhoto = useSelector(selectPhoto);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setSignIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  const signIn = (e) => {
    auth.signInWithPopup(provider).then((res) => {
      console.log(res);
      dispatch(
        setSignIn({
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push('/');
    });
  };

  const goToHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <Logo onClick={goToHome}>
        <img src='/assets/logo-main.jpeg' />
      </Logo>
      <NavigationElements>
        <NavigationElement>
          <Home style={{ color: 'rgb(220, 199, 170)', fontSize: `2.3rem` }} />
          <a href='#' id='home'>
            Home
          </a>
        </NavigationElement>

        <NavigationElement>
          <People style={{ color: 'rgb(220, 199, 170)', fontSize: `2.3rem` }} />
          <a href='#' id='AboutUs'>
            About Us
          </a>
        </NavigationElement>

        <NavigationElement>
          <QuestionAnswer
            style={{ color: 'rgb(220, 199, 170)', fontSize: `2.3rem` }}
          />
          <a href='#' id='Faq'>
            Faq
          </a>
        </NavigationElement>
        {userName && (
          <>
            <NavigationElement>
              <Search
                style={{ color: 'rgb(220, 199, 170)', fontSize: `2.3rem` }}
              />
              <Link to='/verify'>Verify</Link>
            </NavigationElement>
            <NavigationElement>
              <CropFree
                style={{ color: 'rgb(220, 199, 170)', fontSize: `2.3rem` }}
              />
              <Link to='/qr-scanner'>QR Scanner</Link>
            </NavigationElement>
          </>
        )}
      </NavigationElements>
      {!userName ? (
        <AuthenticationButton>
          <button onClick={signIn}>Sign In</button>
        </AuthenticationButton>
      ) : (
        <LogoutButton>
          <button onClick={signOut}>Sign Out</button>
        </LogoutButton>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  font-size: 5rem;
  color: blue;

  background-color: var(--color-blueberry);
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 1.5rem;
`;

const Logo = styled.div`
  flex: 0.1;
  height: 7rem;
  width: 7rem;
  margin-right: 1rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin-bottom: 0.5rem;

  img {
    border-radius: 15%;
    width: 70%;
    height: 90%;
    object-fit: fit;
  }
`;

const NavigationElements = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
`;

const NavigationElement = styled.div`
  font-size: 2.3rem;
  margin-right: 3rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: rgb(220, 199, 170);
    letter-spacing: 1.3px;
    position: relative;
    margin-left: 0.6rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: rgb(220, 199, 170);
      transform: scale(0);
      transform-origin: center;
      transition: all 350ms;
    }

    &:hover {
      &::after {
        transform: scale(1);
      }
    }
  }
`;

const AuthenticationButton = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: transparent;
    border: 1px solid var(--color-citrus);
    border-radius: 6px;
    outline: none;
    color: var(--color-citrus);
    padding: 15px 20px;
    text-align: center;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    font-weight: bold;
    transition: all 250ms;
    cursor: pointer;
    letter-spacing: 1.3px;
    margin-right: 1rem;

    &:hover {
      transform: translateY(-3px) scale(1.05);
      background: var(--color-citrus);
      color: var(--color-blueberry);
    }

    &:active {
      transform: translateY(-1px) scale(1.05);
      background: var(--color-citrus);
      color: var(--color-blueberry);
    }
  }
`;

const LogoutButton = styled(AuthenticationButton)`
  button {
    border: 1px solid var(--color-apricot);
    color: var(--color-apricot);
    padding: 15px 15px;

    &:hover,
    &:active {
      background: var(--color-apricot);
      color: var(--color-apple-core);
    }
  }
`;
