---
title: A8S (Brute Justice)
weight: 2
---

{{< notice style="note" >}}

This guide is written assuming you have all Blue Mage spells, appropriate gear,
and know how to play your chosen role.

{{< /notice >}}

_Sometimes even the most thrilling tale can benefit from slight embellishment,
and the wandering minstrel's reimagining of your foray into Midas─while
stretching the bounds of believability─proves to be even more invigorating than
your memory of it. A memory you must relive in order to compare..._

## Overview

This is the fifth fight in the Morbol series and for most groups will be the
most difficult. It's a very long fight with many phases each with a bunch of
mechanics that need to be respected, and it's easy for small mistakes to cascade
out of control and cause wipes. The biggest thing to remember when doing this
fight is to remember that it is _not_ a DPS check, and mechanics _need_ to be
respected. There will even be times when DPS needs to stop completely in order
to ensure mechanics happen in predictable ways.

## Video Guide

{{< youtube aJFFcZ1m4jQ >}}

## Party Setup

For this fight I recommend the standard one tank mimic, two healer mimics, and
five DPS mimics. It _can_ be solo healed if you have a confident healer, and it
can help if you are trying to skip Gavel, but for most groups it will be safer
to run two healer mimics.

## Utility Spells

- {{< spell mighty_guard >}}
- {{< spell diamondback >}}
- {{< spell blood_drain >}} on the Brawler off-tank.
- {{< spell frog_legs >}} if resolving Gavel properly.
- {{< spell devour >}} if resolving Gavel properly.
- {{< spell white_wind >}} if resolving Gavel properly.

## Phase 1: Onslaughter

In the first phase we have to deal with Onslaughter, which is basically just
Manipulator Junior. Onslaughter periodically uses **Seed of the Sky**, which
just puts ground-targeted AOEs underneath random players, so watch your feet! It
will also use **Hydrothermal Missile**, which deals moderate AOE damage on the
tank, so stay away from the tank when possible.

For this phase I recommend saving your Moon Flute Opener and spells with >60s
cooldowns. Instead, start with a
{{< spell id="bristle" altText="Bristle-buffed" >}} {{<spell song_of_torment >}}
and group up on the tank. I know we said to avoid Hydrothermal Missile, but we
can stack for the first one to get a free {{< spell cold_fog >}} proc and
front-load a bunch of damage. After the first Seed of the Sky, Onslaughter faces
a random target and uses **Mega Beam**, which is a lethal line AOE with a huge
knockback, so sidestep it.

There will be a bunch of Hydrothermal Missiles and Seeds of the Sky so keep
dodging, and then four **Steam Regulators** will spawn, one in each corner. We
need to assign a DPS to kill each one. They spawn inside a square and tether to
the player that enters the square, which gives the player a small DOT debuff.
Leaving the square (including by death) or failing to kill the Steam Regulator
quickly will cause it to explode, wiping the raid. A {{< spell whistle >}},
{{< spell tingle >}}, and {{< spell triple_trident >}} combo will make quick
work of the regulators. The regulator killers need to be careful while burning
down their regulator because there will be a Seed of the Sky and a Mega Beam to
dodge. There _is_ plenty of space in the square to dodge, but it can be tight
especially if you're unprepared.

After the Mega Beam, Onslaughter will use **Perpetual Ray**. This is similar to
the multi-hit tankbuster from A4S but now it also applies a physical
vulnerability up debuff. The tank _needs_ to {{< spell diamondback >}} and will
still need to be healed during this, as it is still a ton of damage even through
{{< spell diamondback >}}. Onslaughter _should_ die shortly before or after
Perpetual Ray. If not, it will do some more AOEs and a Mega Beam. If you see a
**Legislation** cast it's a wipe. It's pretty confusing and easy to skip, so we
just focus on skipping it. Skipping Legislation was easy even at level 60, so
new spells make it that much easier to skip.

## Phase 2: Battle Bots

In this phase we have to fight the four robots from previous Alexander fights:
Blaster, Brawler, Swindler, and Vortexer. They each have different abilities
that they use above 50%, at 50%, and below 50%. This entire phase is all about
controlling mechanics, waiting for mechanics to be stable, pushing the current
target to 50%, and then burning it down before it can actually cause any issues.

This is by far the longest phase in the fight and it is all about controlled
DPS. Most mistakes _are_ recoverable and the phase itself is not a DPS race,
except when we are burning down a bot. The simplified flow of this phase is:

1. Kill Blaster and Swindler.
2. Push Brawler to 50%.
3. Resolve Brawler orbs.
4. Push Brawler to 10%.
5. Push Vortexer to 55%.
6. Wait for a Brawler mechanic so that the off-tank is in
   {{< spell diamondback >}}
7. Burn down Vortexer ASAP, then finish off Brawler.

The first two bots that spawn are Blaster in the north and Brawler in the
center. Brawler will stay in the center for the entire phase, but the other bots
will move with whoever is currently tanking them.

Both tanks will be taking quite a bit of damage throughout this entire phase,
especially at times when the main tank might be tanking two bots. I recommend
assigning one healer to each tank to make things easier.

For the entire phase neither of the tanks should use {{< spell white_wind >}}.
It generates an incredible amount of threat and pulling aggro on bots when you
don't mean to can cause a lot of problems (usually resulting in a wipe).

### Brawler Mechanics

One DPS or healer needs to be the off-tank here. Their job is to put on
{{< spell mighty_guard >}} and tank Brawler for the entire phase while pointing
it away from the party (west by default). Whenever Brawler attaches a **Single
Buster** or **Double Buster** to itself the off-tank needs to
{{< spell diamondback >}}. Single Drill is a heavy-hitting tankbuster and Double
Drill is meant to be a party line-stack AOE, but both are handled most easily
with {{< spell diamondback >}}. The **Double Drill** hits the two players that
are closest and furthest to Brawler with moderate AOE damage that knocks back
and stuns everyone else that gets hit (but not the primary targets). To handle
this we need to assign one player to be the Double Drill baiter. Their job is to
watch for Double Drill, or listen for the off-tank to call it, and then run to
one of the corners of the arena. It doesn't matter which corner they go to, they
just need to pick one so that they're the furthest from Brawler. Brawler uses
its mechanics in a random round-robin order, meaning if you see Single Buster
and Double Buster but haven't seen Double Drill yet, then the next mechanic will
be Double Drill. Once each mechanic has been used then they repeat again in
random round-robin order. When Brawler transitions at 50% the order resets as
well. Being able to predict what ability is coming up can be helpful to know
when it will be safe to transition other bots. Brawler is the very last bot we
kill so we will see its mechanics throughout this entire phase.

### Killing Blaster and Swindler

The rest of the party can whittle down Blaster but should not push it to 50% or
use long cooldowns yet. Blaster should be pulled to the east side since that is
where Swindler will be spawning. Once Swindler spawns, all the DPS (except the
off-tank) should do full Moon Flute openers to burn down both Blaster and
Swindler ASAP. Our goal is to skip all of the mechanics for these bots, but
we'll go over what they are, anyway.

At 55% Blaster uses **Mind Blast**, which is just a small raidwide AOE that is
interruptable. At 50% Blaster spawns a **Blaster Mirage** that when close to
Blaster grants itself and Blaster a very strong vulnerability down buff. If
you're not killing Blaster before the Blaster Mirage becomes active and tethers
to Blaster, figure out why and fix it.

Swindler will use **Height Check** and assign High or Low Arithmeticks to each
player and adjust the height of the floor. Players need to move to a square that
is the "opposite" of their debuff. Low Arithmeticks (red debuff, vuln icon in
lower left of debuff) needs to go up to a high platform, and High Arithmeticks
(purple debuff, vuln icon in upper right of debuff) needs to go down to a low
platform. At 50% Swindler uses **Bio-arithmeticks** which is a _very_
heavy-hitting raidwide, so make sure everyone is at full health and mitigate
with {{< spell bad_breath >}}, {{< role addle >}}, {{< spell magic_hammer >}},
and {{< spell gobskin >}} if possible. Pay extra attention to the off-tank here,
and for extra safety you can wait for the off-tank to be in
{{< spell diamondback >}} for a Brawler mechanic. Below 50% Swindler will use
**Enumeration**, which puts a circle around two random players that requires a
specific number of players to be inside the circle or it kills the target. As
with Blaster Mirage, our goal is to just skip this entirely.

After Blaster and Swindler are dead the party should move to the south where
Vortexer will spawn.

### Brawler Push

The party should push Brawler to 50% next. At 50% Brawler will put up a strong
vulnerability down buff and become functionally invulnerable. It will also start
using **Single Drill** as one of its mechanics, which targets a random player
and hits them with damage based on how close they are to Brawler. Whenever
Single Drill is used, the party should make sure they are not near Brawler to
avoid getting one-shot by it. Brawler will also spawn two large purple **Power
Plasma Beta** orbs in random cardinal directions and two small green **Power
Plasma Gamma** orbs in random intercardinal directions. All four orbs will start
slowly moving towards Brawler.

The green Power Plasma Gamma orbs explode when they reach Brawler and wipe the
raid. They can be intercepted by players, which deals massive damage in a small
circle around the orb. Assign two players to pop these orbs and set a priority
system (e.g. Person A takes the orb starting from north going clockwise, Person
B takes the orb starting from north going counterclockwise). When these players
are going towards their orbs they need to be careful as they move around to
avoid getting hit by any Brawler mechanics if any are happening at the same
time. Healers need to watch these players closely as they take a ton of damage.
{{< spell mighty_guard >}} is required to survive, but {{< spell diamondback >}}
can make things a little bit safer.

The purple Power Plasma Beta orbs are targetable but not killable. They deal
moderate raidwide damage when they reach Brawler. Orbs can and should be slowed
to stagger their hits. Abilities like {{< spell bad_breath >}},
{{< spell reflux >}}, and {{< spell 4-tonze_weight >}} are good for this.
Additionally, things like {{< role addle >}} and {{< spell magic_hammer >}} can
be used to reduce the damage they deal. However, the easiest way to handle this
is to just let both orbs hit Brawler at the same time and have everyone
{{< spell diamondback >}} to survive.

### Push Vortexer and Finish Brawler

From this point on we want to hold any of our long cooldowns for Brute Justice
in the next phase. Brawler becomes targetable once the orbs have despawned. The
next thing we want to do it get Brawler to about 10%, but not kill it. Be _very_
careful about DOT effects here as we do not want to push it early.

Once Brawler is at 10% we switch to Vortexer and get it to 55% without pushing
to 50%. When Vortexer is pushed it uses **Super Cyclone**, a massive raidwide
AOE that also causes a massive knockback from Vortexer. We want to wait for the
off-tank to be in {{< spell diamondback >}} before we push for maximum safety.
If Brawler uses a Single Drill or Double Drill make sure to heal the targets
_before_ we actually push. The Super Cyclone damage should be mitigated as much
as possible, and the party should stand between Vortexer and the south wall so
that they don't actually get knocked back.

Just like with the other bots we need to burn down Vortexer ASAP. It will start
using **Elemental Jammer** which causes a bunch of spooky debuffs and missiles
that leave puddles around the arena. We really don't want to deal with this, so
we will just skip it. {{< spell cold_fog >}} on the Super Cyclone hit is a
_really_ good idea here, and {{< spell moon_flute >}} can help but should not be
needed.

Once Vortexer is dead, Brawler will start causing Self-Destruct, which is an
instant wipe if it finishes. Switch to Brawler and finish it off, and then get
ready for Brute Justice.

### Phase 3: Brute Justice

Have the party move to just east of the center of the arena and the tank just
north of the center. The five bots will show up in the middle and fuse into
Brute Justice. When they **Transform** there is a big knockback with moderate
raidwide damage. Use {{< role surecast >}} when the lightning appears between
the bots to negate the knockback.

Once Brute Justice is targetable, the tank should use {{< spell white_wind >}}
to quickly generate a bunch of threat. At this point everyone who can do a Moon
Flute Opener should be doing one, including one healer if possible (if you are
running two healers). Brute Justice opens up with **Flarethrower**, a conal
tankbuster, followed by **Double Rocket Punch**, which is meant to be a shared
tankbuster. The tank should try to learn the timing to generate threat and then
{{< spell diamondback >}} both hits, but it is most important to mitigate Double
Rocket Punch since it is not survivable otherwise.

Once the tankbusters are finished we get to play "ring around the robot." Brute
Justice sends out the following attacks at the same time:

- **Short Needle**: light raidwide AOE damage.
- **Long Needle (Prey)**: moderate AOE damage around two random players,
  indicated by a red circle overhead.
- **Long Needle (Stack)**: marks one random player with a stack marker that
  deals moderate AOE damage split between all players hit.

{{< notice style="warning" >}}

Since the level 80 patch came out it is actually possible to do _too_ much
damage and push Brute Justice before the Super Jump. If that happens you will be
in Waning Nocturne when Intermission 2 starts and probably die. If this is the
case, consider dropping {{< spell breath_of_magic >}} from one of the openers or
dropping {{< spell moon_flute >}} entirely from one or two people.

{{< /notice >}}
