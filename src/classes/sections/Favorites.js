import isX from "../../helpers/isX.js";
import { ListBasicCoins } from "./../components/lists/ListBasicCoins.js";

export class Favorites extends ListBasicCoins {
	/**
	 * @Statics
	 */
	static getSchema = () => {
		return new this();
	};

	/**
	 * @Constructor
	 */
	constructor(data) {
		super(data);
		this.set(data);
	}

	/**
	 * @Variables
	 */
	db_type = "favorites";

	/**
	 * @Public Functions
	 */

	set = (data) => {
		if (!this.isFavoritesObject(data) && !isX.isObject(data)) return;
		const { cryptos = [], tokens = [] } = data;
		this.cryptos = [...cryptos];
		this.tokens = [...tokens];
		this.setAmount();
	};

	isFavoritesObject = (data) => {
		if (data instanceof this.getFavoritesClass()) return true;
		else return false;
	};

	getFavoritesClass = () => {
		return Favorites;
	};
}