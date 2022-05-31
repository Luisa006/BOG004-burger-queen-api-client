import React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import Fetch from '../fetch'
import Login from "./Login";
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'


it('componente login', async () => {
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
// await waitFor(() => screen.findByText('notification'))
});

