<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Service\Filter;

use EllisLab\ExpressionEngine\Library\CP\URL;
use EllisLab\ExpressionEngine\Service\View\ViewFactory;

/**
 * Keyword Filter
 */
class Keyword extends Filter {

	public function __construct()
	{
		$this->name = 'filter_by_keyword';
		$this->placeholder = lang('keyword_filter');
		$this->list_class = 'filter-search-form';
	}

	/**
	 * @see Filter::render
	 */
	public function render(ViewFactory $view, URL $url)
	{
		$filter = [
			'name'        => $this->name,
			'value'       => $this->value(),
			'placeholder' => $this->placeholder
		];

		return $view->make('_shared/filters/keyword')->render($filter);
	}

}

// EOF
