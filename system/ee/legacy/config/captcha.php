<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed.');
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

/**
 * ExpressionEngine CAPTCHA Word Dictionary
 */

ee()->load->library('logger');
ee()->logger->deprecated('3.4.0', 'ee()->config->loadFile("captcha") to load this config file', TRUE, 604800);

$words = ee()->config->loadFile('captcha');

// EOF
