<?php

namespace Yoast\WP\SEO\Presenters\Open_Graph;

use Yoast\WP\SEO\Presenters\Abstract_Cached_Indexable_Tag_Presenter;

/**
 * Presenter class for the Open Graph article modified time.
 * phpcs:ignore Yoast.NamingConventions.ObjectNameDepth.MaxExceeded
 */
class Article_Modified_Time_Presenter extends Abstract_Cached_Indexable_Tag_Presenter {

	/**
	 * The tag key name.
	 *
	 * @var string
	 */
	protected $key = 'article:modified_time';

	/**
	 * The tag format including placeholders.
	 *
	 * @var string
	 */
	protected $tag_format = self::META_PROPERTY_CONTENT;

	/**
	 * Gets the raw value of a presentation.
	 *
	 * @return string The raw value.
	 */
	public function refresh() {
		return $this->presentation->open_graph_article_modified_time;
	}
}
