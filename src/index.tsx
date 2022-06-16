import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.component';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
		</Routes>
	</BrowserRouter>
);

