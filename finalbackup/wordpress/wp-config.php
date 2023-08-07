<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/documentation/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '1a4d3c4ce4bd238b57d1a575466b562b581a5f7fe0dc5dc7016076fc17782920' );


/** Database hostname */

define( 'DB_HOST', '127.0.0.1:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'l*?t);m8]:%Kf+;*+]Fx{@Ip~:N@@|q.y<~L@V,ygMt4NsPHhlu!BldkofKBn^*T' );

define( 'SECURE_AUTH_KEY',  'B#A:lE27xhmR}iL+R:a:pY,6rprA HR4$>Nl.0ruz;@|t<R/DY]ymQachrgL>WFX' );

define( 'LOGGED_IN_KEY',    'EYi}Xpg+>bO6@PT6m|yX|aAVYF,!=BUvnx3N*x)hCk&ikLT[T?dm^E%Zj^Z=z}gS' );

define( 'NONCE_KEY',        '75E&x@.5 Ko,Ch7#7tK0mf(S,<3DOlrLVfvqCCd/).ElzKH6wrJeaXc1)j@pqaSx' );

define( 'AUTH_SALT',        '5K`zz(}5,=~fn?Sic>Oe)=TS]caAt1EV&ZtO-)xvw 5k[=+~+v<.kX<;SYu!O$72' );

define( 'SECURE_AUTH_SALT', 'Sm-WH}AO# PTK),VtDF1~(?Y^^4(|w=_r9-Jc@y7[hb,.Dg?=(|DD,I;CafwPEo2' );

define( 'LOGGED_IN_SALT',   'hr<#uvI=@dnuen9WKLc/{[?_&XbmNX0ut *KZlj%P[HA3oC0Vz^bT!ti9c6OTje&' );

define( 'NONCE_SALT',       'e0~3Z40yO>EG|Bd?3;ub|W;*zu-Ufv.k4V}6eN*Y;$lI2nzKDR/L)rZL-j8!,yHR' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
