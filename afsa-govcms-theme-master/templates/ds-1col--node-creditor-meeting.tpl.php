<?php

/**
 * @file
 * Display Suite 1 column template.
 */
?>
<<?php print $ds_content_wrapper; print $layout_attributes; ?> class="ds-1col <?php print $classes;?> clearfix">
  
  <span class="addtocalendar atc-style-blue">
    <var class="atc_event">
      <?php foreach ($calendar_event as $setting => $value): ?>
        <var class="<?php print $setting; ?>"><?php print $value; ?></var>
      <?php endforeach; ?>
    </var>
  </span>

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php print $ds_content; ?>
</<?php print $ds_content_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
