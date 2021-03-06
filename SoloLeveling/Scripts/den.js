/*
*	@filename	den.js
*	@author		isid0re
*	@desc		den quest
*/

function den () {
	if (Misc.checkQuest(1, 0)) {
		return true;
	}

	print('ÿc9SoloLevelingÿc0: starting den');
	me.overhead("den");

	if (!Pather.checkWP(3)) {
		Pather.moveToExit([2, 8], false, true);

		if (!me.getItem(518)) {
			let tp = me.getItem(529);

			if (tp) {
				clickItem(1, tp);
			}
		} else {
			Pather.makePortal();
		}

		if (me.classid !== 3 && me.charlvl < 3) {
			Attack.clearLevel();
		}

		Pather.getWP(3);
		Pather.useWaypoint(1);
	}

	Town.doChores();

	if (!Pather.usePortal(2, me.name)) {
		Pather.moveToExit(2, true);
	}

	Precast.doPrecast(true);
	Pather.moveToExit(8, true);
	Attack.clearLevel();

	if (!me.getItem(518)) {
		Pather.moveToExit([2, 3], true);
		Pather.useWaypoint(1);
	} else {
		Town.goToTown();
	}

	Town.npcInteract("akara");

	return true;
}
