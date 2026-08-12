import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Single from '../../pages/Single'
import Add from '../../pages/Add'
import Page404 from '../../pages/Page404'

const Main = () => {
	return (
		<div className="min-h-[700px] w-[90%] m-auto pt-[50px]">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/wallet/:walletId" element={<Single />} />
				<Route path="/add" element={<Add />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</div>
	)
}

export default Main