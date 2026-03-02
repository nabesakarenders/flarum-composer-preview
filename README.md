# Flarum Composer Preview

This extension adds a toggleable parsed preview to Flarum when creating a new topic. It overlays ontop of the disscusion list when toggled on and shows a simple parsed version of the topic.

### Installing

Install as you would any other Flarum extension. Using composer:

```
composer require nabesaka/flarum-composer-preview
```

Enable in the admin panel. There are currently no settings. You will now see a 'eye' symbol on the composer toolbar **only** when creating a **new topic**. Clicking will enable the overlay behind the composer. The extension automatically adds space for the default height of the composer so you can scroll the view and see the entire preview of your post, should it be taller than the available space. If you change the height of the composer the preview is not currently able to adjust for it.