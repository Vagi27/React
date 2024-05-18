// import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        src={require("./images/company-logo.jpg")}
        alt="Company logo"
        className="logo"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="Header flex">
      <Title />

      <input type="text" className="headerInput" placeholder="Search.." />

      <img
        src={require("./images/user icon.jpg")}
        alt="user"
        className="userIcon"
      />
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "831065",
      name: "Chinese Wok",
      cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
      locality: "Kaccha Bagh Area",
      areaName: "Omaxe mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.1,
      parentId: "61955",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-13 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "804071",
      name: "Pizza Hut",
      cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
      locality: "H.C. Sen Marg",
      areaName: "Omaxe ChandniChowk",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-13 22:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "781551",
      name: "Mehfil",
      cloudinaryImageId: "a0126ed01c247a281cbfec8219707de9",
      locality: "Shakarpur",
      areaName: "Laxmi Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Indian"],
      avgRating: 4.2,
      parentId: "637",
      avgRatingString: "4.2",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-13 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "286518",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "ru7j7x8qqtvuzfuw7cdh",
      locality: "Janpath",
      areaName: "Janpath",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "10804",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-13 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
];

//manual method
// -> after destructuring props using {} properties insides props objects can directly be used
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => (
  // const {name,cloudinaryImageId,cuisines, avgRating}=restaurant.info;
  <div className="card">
    <img
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId
      }
    />
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h3>{avgRating + " stars"}</h3>
  </div>
);

const Body = () => (
  <div className="restaurantContainer flex ">
    {/* {console.log("abc")} */}
    {console.log( 
      restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} />;
      })
    )}

    {restaurantList.map((restaurant) => {
      return <RestaurantCard key ={restaurant.info.id} {...restaurant.info} />;
    }
    )}
    {/* <RestaurantCard {...restaurantList[0].info} /> */}
    {/* <RestaurantCard {...restaurantList[1].info} /> */}
    
  </div>
);
const Footer = () => <></>;

const AppLayout = () => (
  <>
    {/* React Fragment */}
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header />);
root.render(<AppLayout />);
