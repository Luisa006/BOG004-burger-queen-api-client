import React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import Fetch from '../fetch'
import Login from "./Login";
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'


it('componente Login', async () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>,
  )
const emailInput = screen.getByPlaceholderText("Email")
const passInput = screen.getByPlaceholderText("Contraseña")
fireEvent.change(emailInput, {target: {value: 'testfake@gmail.com'}})
fireEvent.change(passInput, {target: {value: '654321'}})
//screen.getAllByPlaceholderText('Emailss')
const btnLogin = screen.getByText("Ingresar")
fireEvent.click(btnLogin)
let error;
// const notificationTxt = screen.queryByTestId('notification-input')
await waitFor(() => error = screen.getByTestId('login-error'))
expect(error.textContent).toBe('')

});

