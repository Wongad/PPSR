<?php
/**
 * @file
 * Display Suite 2 column template.
 */
  // Add sidebar classes so that we can apply the correct width in css.
  if (($left && !$right) || ($right && !$left)) {
    $classes .= ' group-one-column';
  }
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="ds-2col-fluid <?php print $classes;?> clearfix">

  <span class="addtocalendar atc-style-blue right">
    <var class="atc_event">
      <?php foreach ($calendar_event as $setting => $value): ?>
        <var class="<?php print $setting; ?>"><?php print $value; ?></var>
      <?php endforeach; ?>
    </var>
  </span>

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php if ($left): ?>
    <<?php print $left_wrapper ?> class="group-left<?php print $left_classes; ?>">
      <?php print $left; ?>
    </<?php print $left_wrapper ?>>
  <?php endif; ?>

  <?php if ($right): ?>
    <<?php print $right_wrapper ?> class="group-right<?php print $right_classes; ?>">

      <?php print $right; ?>
    </<?php print $right_wrapper ?>>
  <?php endif; ?>
  
  <?php // Add the variables required to build the add to calendar functionality. ?>

  
</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
