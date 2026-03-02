import { extend, override } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';
import ComposerState from 'flarum/common/components/ComposerState';
import ComposerPostPreview from 'flarum/common/components/ComposerPostPreview';

app.initializers.add('nabesaka/flarum-composer-preview', () => {

  extend(app.composer.constructor.prototype, 'load', function () {
    if (typeof this.showPreview === 'undefined') {
      this.showPreview = false;
    }
  });

  app.composer.constructor.prototype.togglePreview = function () {
    this.showPreview = !this.showPreview;
    m.redraw();
  };


  // Add the actual preview to the main App
  extend(IndexPage.prototype, 'view', function (vdom) {
    if (!app.composer.isVisible() || !app.composer.fields.title || !app.composer.showPreview) return;

    vdom.children.push(
      <div class="ComposerPreview-overlay" style={ '--composer-height: ' + app.composer.height + 'px;'}>
        <div class="ComposerPreview-container">
          <div class="ComposerPreview-header">
            {app.translator.trans('nabesaka-composer-preview.forum.preview_heading')}
          </div>
          <h3 class="ComposerPreview-title">{(app.composer.fields.title ? app.composer.fields.title() : app.translator.trans('nabesaka-composer-preview.forum.preview_default_title'))}</h3>
          <div class="ComposerPreview-content">
            <ComposerPostPreview composer={app.composer} class="ComposerPreview-preview" />
          </div>
        </div>
      </div>
    );
  });

  // Preview toggle must be added to the TextEditor's context but check that the composer is open
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
    // Only add the preview button if we're in a composer and it has a title (means it is a new discussion not an edit or reply)
    if (!this.attrs.composer || !this.attrs.composer.fields.title) return;

    console.log(this.attrs.composer);

    items.add(
      'preview-toggle',
      <TextEditorButton 
      onclick={() => this.attrs.composer.togglePreview()} 
      icon={(this.attrs.composer.showPreview ? 'fas fa-eye-slash' : 'fas fa-eye')} 
      tooltipText={app.translator.trans('nabesaka-composer-preview.forum.toggle_preview_tooltip')}
      >
        {app.translator.trans('nabesaka-composer-preview.forum.toggle_preview_tooltip')}
      </TextEditorButton>
    );
  });

  // Try to add a ResizeObserver to the composer to adjust the height limit of the preview to prevent overlap
  const composer = document.querySelector('.Composer');
  const preview = document.querySelector('.ComposerPreview-overlay');
  if (composer && preview) {
    const ro = new ResizeObserver(entries => {
      const height = entries[0].contentRect.height;
      preview.style.setProperty('--composer-height', `${height}px`);
    });
    ro.observe(composer)
  }

  // // Have the Composer keep track of the preview state, default it to false on init
  // extend(ComposerState.prototype, 'oninit', function () {
  //   this.showPreview = false;
  // });

  // // Have the Composer deal with toggling the preview state too
  // ComposerState.prototype.togglePreview = function () {
  //   this.showPreview = !this.showPreview;
  //   m.redraw();
  // };

  // Modify the view to add the preview pane in a split layout
  // override(TextEditor.prototype, 'view', function (original) {
  //   // Only show preview if enabled and we're in a composer
  //   if (!this.showPreview || !this.attrs.composer) return original();

  //   return (
  //     <div class="ComposerEditor-split">
  //       <div class="ComposerEditor-editor">
  //         {original()}
  //       </div>
  //       <div class="ComposerEditor-preview">
  //         <ComposerPostPreview composer={app.composer} />
  //       </div>
  //     </div>
  //   );
  // });
});
