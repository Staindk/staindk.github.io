---
layout: post
title: Cloudy Kvass - A Convenient Personal Key-Value Store
description: Setting up a personal key-value store in GCP
---

I saw [this post](https://news.ycombinator.com/item?id=32212235) on HN the other day and thought the project sounded like something I could make use of, as I often want to send a link or quick note between my work laptop and PC.
[Kvass](https://github.com/maxmunzel/kvass) is a personal key-value store with some bells and whistles - it can be run offline or hosted as a server, and can generate URLs and QR codes to specific keys that can be shared with others.

What follows is the rough process I followed to set Kvass up locally, then on a Google Cloud Compute VM, and finally how I configured DNS to access my Kvass instance through `kv.steyn.dk`.