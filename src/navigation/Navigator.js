
export const navigateToSplash = (navigation) => {
    navigation.navigate("SplashScreen")
}

export const navigateToAppIntro = (navigation) => {
    navigation.navigate("AppIntroScreen")
}
export const navigateToConfig = (navigation) => {
    navigation.navigate("ConfigScreen")
}

/** Navigator for Auth Stack */
export const navigateToAuth = (navigation) => {
    navigation.navigate("AuthScreen")
}

export const navigateToLogin = (navigation) => {
    navigation.navigate("AuthScreen")
}

export const navigateToSignup = (navigation) => {
    navigation.navigate("SignupScreen")
}

export const navigateToForget = (navigation) => {
    navigation.navigate("ForgetScreen")
}


/** Navigator for Main Stack */

export const navigateToMain = (navigation) => {
    navigation.navigate("MainScreen")
}


export const navigateToProfile = (navigation) => {
    navigation.navigate("ProfileScreen")
}

export const navigateToResetPassword = (navigation) => {
    navigation.navigate("ResetScreen")
}
export const navigateToAddress = (navigation) => {
    navigation.navigate("AddressScreen")
}

export const navigateToNewAddress = (navigation,data) => {
    navigation.navigate("NewAddressScreen",{...data})
}

export const navigateToWishlist = (navigation) => {
    navigation.navigate("WishlistScreen")
}

export const navigateToOrders = (navigation) => {
    navigation.navigate("OrdersScreen")
}

export const navigateToOrderDetails = (navigation, id) => {
    navigation.navigate("OrderDetailsScreen", {id})
}

export const navigateToCheckout = (navigation) => {
    navigation.navigate("CheckoutScreen")
}



/** Navigator for Tabs */

export const navigateToHome = (navigation) => {
    navigation.navigate("HomeScreen")
}

export const navigateToSearch = (navigation) => {
    navigation.navigate("SearchScreen")
}


export const navigateToCart = (navigation) => {
    navigation.navigate("CartScreen")
}

export const navigateToMore = (navigation) => {
    navigation.navigate("MoreScreen")
}



/** Navigator for Product Stack */

export const navigateToProduct = (navigation, data) => {
    navigation.navigate("ProductScreen", { data })
}

export const navigateToProductDescription = (navigation, data) => {
    navigation.navigate("DescriptionScreen", {data})
}

export const navigateToProductReviews = (navigation, data) => {
    navigation.navigate("ReviewsScreen", {data})
}

export const navigateToAddReview = (navigation, data) => {
    navigation.navigate("AddReviewScreen", {...data})
}

export const navigateToProductGallery = (navigation, data) => {
    navigation.navigate("GalleryScreen", {data})
}



/** Navigator for Category Stack */

export const navigateToCategory = (navigation, data) => {
    navigation.navigate("CategoryScreen", data)
}

export const navigateToFilter = (navigation, data) => {
    navigation.navigate("FilterScreen", data)
}





