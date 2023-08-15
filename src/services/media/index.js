const cloudinary = require('cloudinary');
const { config } = require('../../../config');
/**
 *
 * @class Media
 * @description Media service - handles all media related operations
 */

class Media {
  /**
   * @private
   * @description configuration for media service
   * @memberof Media
   * @returns {void}
   */
  static config() {
    return cloudinary.config({
      cloud_name: config.MEDIA_CLOUD_NAME,
      api_key: config.MEDIA_API_SECRET,
      api_secret: config.MEDIA_API_KEY,
      secure: true,
    });
  }
}

module.exports = Media;
