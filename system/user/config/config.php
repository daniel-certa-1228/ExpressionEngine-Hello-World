<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['save_tmpl_files'] = 'y';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '4.0.9';
$config['encryption_key'] = '1f1ffc88bf59dae98abff43e6bdd3b5638fc0e75';
$config['session_crypt_key'] = '74d00ec65dea0715c279bc3f5af306952b2184a3';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => '127.0.0.1',
		'database' => 'ExpressionEngine',
		'username' => 'root',
		'password' => 'password',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);

// EOF