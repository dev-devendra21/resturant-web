import './index.css'
import Button from '../Button'
import {useCart} from '../../context/CartContext'

const DishItem = props => {
  const {
    dishName,
    dishCalories,
    dishAvailability,
    dishCurrency,
    dishDescription,
    dishImage,
    dishPrice,
    addonCat,
    dishType,
    dishId,
    dishQuantity,
  } = props

  const {
    cart,
    addCartItem,
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useCart()

  const addToCart = (id, quantity) => {
    const payload = {
      id: dishId,
      name: dishName,
      price: dishPrice,
      image: dishImage,
      quantity,
    }
    return addCartItem(id, payload)
  }

  // const removeFromCart = () => removeCartItem(dishId)

  // const handleIncreaseQuantity = () => {
  //   const isExist = cart.find(item => item.id === dishId)
  //   if (isExist) {
  //     incrementCartItemQuantity(dishId)
  //   } else {
  //     addToCart()
  //   }
  // }

  // const handleDecreaseQuantity = () => {
  //   const isExist = cart.find(item => item.id === dishId)
  //   if (isExist) {
  //     if (isExist.quantity > 0) {
  //       decrementCartItemQuantity(dishId)
  //     }
  //   }
  //   if (isExist.quantity <= 1) {
  //     removeFromCart()
  //   }
  // }

  return (
    <li className="dishes-card">
      <main className="dish-details">
        <div className="dish-name-container">
          <div className="dish-icon-container">
            {dishType === 2 ? (
              <img
                src="https://res.cloudinary.com/ddox0bhgm/image/upload/v1712894068/food%20web/veg_icon_pcudqt.png"
                alt="vegetarian-food"
                className="food-symbol"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/ddox0bhgm/image/upload/v1712894101/food%20web/non-veg-icon_sutz7d.png"
                alt="non-vegetarian-food"
                className="food-symbol"
              />
            )}
          </div>
          <h1 className="dish-name">{dishName}</h1>
        </div>
        <p className="dish-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        <div>
          {dishAvailability ? (
            <Button id={dishId} addToCart={addToCart} />
          ) : (
            <p className="not-available">Not available</p>
          )}
        </div>
        <p className="customizations">
          {addonCat?.length > 0 ? 'Customizations available' : ''}
        </p>
      </main>
      <p className="dish-calories">{dishCalories} calories</p>
      <main className="dish-image-container">
        <img src={dishImage} className="dish-image" alt={dishName} />
      </main>
    </li>
  )
}

export default DishItem
