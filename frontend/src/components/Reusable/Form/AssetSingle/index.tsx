const AssetSingle = () => {
	return (
		<div className="flex justify-between items-center mb-7">
			<div className="w-[40%]">
				<label htmlFor="asset-symbol">Symbol</label>
				<input type="text" id="asset-symbol" className="form-field" />
			</div>
			<div className="w-[40%]">
				<label htmlFor="asset-balance">Balance</label>
				<input type="text" id="asset-balance" className="form-field" />
			</div>
			<button>Delete</button>
		</div>
	)
}

export default AssetSingle