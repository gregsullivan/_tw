<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _tw
 */

?>

	<footer id="colophon">
		<div>
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', '_tw' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', '_tw' ), 'WordPress' );
				?>
			</a>
			<span> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', '_tw' ), '_tw', '<a href="http://underscores.me/">Underscores.me</a>' );
				?>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
