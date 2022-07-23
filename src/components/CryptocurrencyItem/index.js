// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, uroValue, currencyLogo} = eachItem
  return (
    <li>
      <div>
        <img src={currencyLogo} className="img-logo" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{uroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
