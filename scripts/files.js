/**
 * Utility: Files
 */

const path = require('path');
const touch = require('touch');

module.exports = {
	getCurrentDirectoryBase: () => {
		return path.basename(process.cwd());
	},

	createFile(filename) {
		touch(filename);
	},

	local_php: (ip, port) => {
		return `<?php
define('DB_HOST', '${ip}:${port}');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');

// Only display fatal run-time errors.
// See http://php.net/manual/en/errorfunc.constants.php.
error_reporting(1);
define( 'WP_DEBUG', false );
`;
	},

	local_yml: () => {
		return `path: app/public
require:
  - wp-cli.local.php
`;
	}
};
