<h1 align="center">Blue Academy Website</h1>
<p align="center">
<a href="https://discord.gg/blueacademy">
<img src="https://github.com/RoarkGit/Blue-Academy/blob/main/static/images/audrey.png" style="width: 50%;"></br>
<img src="https://dcbadge.vercel.app/api/server/blueacademy"></a>
<a href="https://youtube.com/blueacademy">
<img src="https://img.shields.io/youtube/channel/subscribers/UCN1yOhovsQdM7jbPNMKAj0Q?style=for-the-badge"></a>
</p>
<h3 align="center">A website for aggregating and storing FFXIV Blue Mage knowledge and resources!</h3>

---

This website is built using [Hugo](https://gohugo.io/) and the
[Hugo Relearn Theme](https://github.com/McShelby/hugo-theme-relearn). This makes
it easy for anyone to help contribute! Most content can be added/edited strictly
through markdown.

# Website Layout

The directories in the project map to the following content:

- `archetypes`: layouts for a given _type_ of content (e.g. stage guide)
- `assets`: static resources that get compiled for deploying on the website,
  such as image tooltips and TypeScript files
- `content`: the actual content for the website; sections are subdirectories and
  `.md` files are the actual content
- `data`: static data used for populating data on pages, such as spell data
- `layouts`: shortcodes and partial layouts used for constructing a part of a
  page; this is where you can add more complicated stuff that cannot be done
  natively in the content files
- `static`: static content such as `.css` stylesheets and some images
- `themes`: contains the theme submodule

# Contributing

Anyone is welcome to contribute! At the simplest level, you can submit a merge
request with new content files or additions to existing content files. If it's
just simple markdown then rendering would work as expected.

To actually build a local version of the website and verify that things like
shortcodes work and that stuff _does_ look like you expect, you need to install:

- [`hugo-extended`](https://github.com/gohugoio/hugo/releases), make sure it's
  the `-extended` version!
- `npm` is helpful for things like auto-formatting, but it's not actually used
  for building anything.

After snagging the requirements, you can clone the repo:

```bash
git clone https://github.com/RoarkGit/Blue-Academy.git
```

Make sure to download the required theme or rendering won't work.

```bash
git submodule update --recursive
```

After everything is downloaded, you can bring up the local website by running:

```bash
hugo server -D
```

This will bring the website up at `localhost:1313`. Whenever you make changes to
a page, it will detect the changes, recompile, and then redeploy the website.
Some content, such as TypeScript modules, to _not_ get properly recompiled by
this process and require a manual restart of the server to take effect.

## Shortcodes

There are some shortcodes that are helpful to use for adding content:

- If you want to link to a spell and have its tooltip show up on a site, you can
  write `{{< spell the_rams_voice >}}`! The argument for the shortcode is the
  spell's full name, with punctuation removed, and spaces replaced with `_`.
  This also works for role actions, but with the `{{< role addle >}}` shortcode.
- You can create a spell loadout by writing
  `{{< spell-loadout spels="1,,32,,104" >}}`. In this example, you will create a
  spell loadout with Water Cannon in the first spot, Toad Oil in the third spot,
  and Nightbloom in the fifth spot.
- You can render a rotation and its timeline by adding its contents to
  `rotation.yaml` and then using its shortcode
  `{{< rotation "rotation_name" >}}`
