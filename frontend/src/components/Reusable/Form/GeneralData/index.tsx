const GeneralData = () => {
	return (
		<div className="flex justify-between">
			<div className="w-[48%]">
				<label htmlFor="wallet-name">Name</label>
				<input type="text" id="wallet-name" className="form-field" />
			</div>
			<div className="w-[48%]">
				<label htmlFor="wallet-address">Address</label>
				<input type="text" id="wallet-address" className="form-field" />
			</div>
		</div>
	)
}

export default GeneralData