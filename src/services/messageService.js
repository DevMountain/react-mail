export function getMessages() {
	return messages.slice();
}

export function findMessageById( id ) {
	for ( let i = 0; i < messages.length; i++ ) {
		if ( messages[ i ]._id === id ) {
			return messages[ i ]
		}
	}

	return {};
}

const messages = [
	{
		"_id": "57890a9096d0df3cc1a3a655",
		"name": "Mccoy Floyd",
		"email": "mccoyfloyd@kyagoro.com",
		"content": "Elit sit dolor ut deserunt incididunt voluptate culpa. Nostrud sit reprehenderit laborum nostrud laborum deserunt in aliqua duis irure. Cillum sunt sunt do excepteur sunt veniam fugiat reprehenderit commodo ad. Deserunt culpa qui velit cillum tempor laboris ad qui cillum laborum. Incididunt reprehenderit anim voluptate in non aute cillum.\r\n"
	},
	{
		"_id": "57890a90c179cad39d155108",
		"name": "Flora Porter",
		"email": "floraporter@kyagoro.com",
		"content": "Cillum ex duis commodo excepteur nulla deserunt dolor. Eiusmod in ea culpa ipsum consectetur duis ut cillum. Veniam laborum enim qui velit quis fugiat consectetur est. Incididunt mollit aute ut consectetur commodo velit exercitation veniam. Est aute nulla reprehenderit veniam nostrud sunt ea mollit minim commodo sit commodo. Exercitation duis sit laborum aliquip consequat Lorem officia consequat velit sunt ut mollit.\r\n"
	},
	{
		"_id": "57890a90bc13f2e6c097438b",
		"name": "Newman Brooks",
		"email": "newmanbrooks@kyagoro.com",
		"content": "Elit sit voluptate non adipisicing consequat culpa esse fugiat adipisicing Lorem Lorem do. Consectetur eiusmod quis dolore ipsum. Ea incididunt commodo irure aliqua. Incididunt esse magna velit tempor et dolor enim commodo occaecat mollit magna dolor. Culpa sunt voluptate adipisicing qui occaecat do ut quis eiusmod. In laboris in pariatur voluptate laborum sunt nulla do duis deserunt laborum voluptate nostrud ad. Aliqua reprehenderit ea labore anim amet nulla irure qui non.\r\n"
	},
	{
		"_id": "57890a9026b9ddcb24c1736e",
		"name": "Dudley Rojas",
		"email": "dudleyrojas@kyagoro.com",
		"content": "Nulla cupidatat tempor aliquip do esse. Ullamco aliqua non ut ipsum voluptate laborum officia minim fugiat. Aute occaecat eiusmod dolore incididunt ut sunt Lorem officia.\r\n"
	},
	{
		"_id": "57890a90d419cf3afa39caae",
		"name": "Clarke Barton",
		"email": "clarkebarton@kyagoro.com",
		"content": "Nulla veniam incididunt veniam magna ut reprehenderit tempor duis voluptate adipisicing sit. Ut nisi anim et sint nulla. Aute non id mollit tempor excepteur. Enim voluptate ea quis est tempor culpa elit aliqua officia dolor do. Aliqua commodo quis aliqua est esse elit nostrud sunt consequat. Cillum reprehenderit sit dolore labore ullamco ut eu culpa eu. Consectetur et nulla non anim enim Lorem dolore sit proident laboris.\r\n"
	},
	{
		"_id": "57890a907068e8e3a08a9276",
		"name": "Maynard Boyer",
		"email": "maynardboyer@kyagoro.com",
		"content": "Deserunt ipsum occaecat excepteur fugiat enim ullamco incididunt occaecat consectetur nulla. Quis id labore irure aute eiusmod tempor do magna pariatur proident. Et do exercitation veniam commodo consequat Lorem. Anim deserunt nisi aute aute eu ea incididunt cupidatat eu. Cillum commodo amet esse proident dolore quis. Deserunt ex ea cupidatat Lorem nulla eiusmod enim elit commodo laboris ad reprehenderit excepteur consequat. Veniam ea elit excepteur incididunt.\r\n"
	},
	{
		"_id": "57890a9085921b98cab467bb",
		"name": "Bean Shaw",
		"email": "beanshaw@kyagoro.com",
		"content": "Amet non velit exercitation aute tempor aliqua dolore mollit cupidatat in velit et consequat velit. Mollit nisi exercitation exercitation aute proident. Labore qui laboris voluptate ullamco.\r\n"
	},
	{
		"_id": "57890a90bc6168dd0d353ae5",
		"name": "Hobbs Taylor",
		"email": "hobbstaylor@kyagoro.com",
		"content": "Irure nisi incididunt excepteur voluptate elit esse id velit nulla sint exercitation sint magna non. Non eiusmod ullamco excepteur aliquip eu commodo amet veniam non adipisicing veniam aliqua. Ea reprehenderit excepteur commodo ut. Deserunt officia enim adipisicing eiusmod quis laboris culpa laboris culpa et sint do aliqua. Nisi do elit duis exercitation enim sit consectetur fugiat aliquip consequat. Consectetur velit dolor duis labore officia nulla.\r\n"
	},
	{
		"_id": "57890a9093102bc2fe314fb2",
		"name": "Bettye Rowland",
		"email": "bettyerowland@kyagoro.com",
		"content": "Ut aliquip et voluptate exercitation nisi eu id commodo pariatur laborum culpa sint ullamco. Quis reprehenderit ut irure in ea quis in adipisicing duis ullamco exercitation. Fugiat laborum ea adipisicing laborum fugiat magna cillum culpa non incididunt officia laborum nostrud. Ut magna reprehenderit deserunt ex qui Lorem. Irure laboris laboris aute veniam pariatur. Cillum magna ut est ut. Excepteur incididunt dolor esse culpa aliquip duis esse commodo nostrud et reprehenderit do aliqua.\r\n"
	},
	{
		"_id": "57890a90b3113dbc655a1e62",
		"name": "Barrera Powell",
		"email": "barrerapowell@kyagoro.com",
		"content": "In veniam adipisicing ad adipisicing laborum quis ad reprehenderit cupidatat velit consectetur consectetur mollit. Anim magna culpa anim minim. Culpa in labore ullamco veniam cillum amet culpa. Nisi aliqua quis nisi eu commodo adipisicing consequat proident proident irure occaecat adipisicing. Reprehenderit ullamco proident ullamco id officia cupidatat ea excepteur anim. Anim amet anim eiusmod velit.\r\n"
	},
	{
		"_id": "57890a90ffcb34615125e2cf",
		"name": "Angeline Kerr",
		"email": "angelinekerr@kyagoro.com",
		"content": "Aliqua magna proident eiusmod exercitation minim quis ut deserunt occaecat consequat adipisicing. Amet do minim reprehenderit quis enim dolor id. Et dolore incididunt minim ex laborum enim voluptate ea anim et deserunt cupidatat.\r\n"
	},
	{
		"_id": "57890a90b59bd5bdf79b741c",
		"name": "Murray Hancock",
		"email": "murrayhancock@kyagoro.com",
		"content": "Exercitation laborum ut quis sit aliqua sint ea labore voluptate aute id et quis culpa. Ea id deserunt ex est ipsum fugiat dolore et. Consequat tempor enim et non pariatur magna cupidatat. Laborum labore enim esse in cupidatat enim non ut.\r\n"
	},
	{
		"_id": "57890a90e788d55e1f6902b6",
		"name": "Harvey Preston",
		"email": "harveypreston@kyagoro.com",
		"content": "Irure irure qui cillum duis amet esse ad adipisicing quis amet. Magna voluptate voluptate nisi duis nisi duis qui consequat nostrud aliquip laborum. Ipsum fugiat laborum eiusmod id.\r\n"
	},
	{
		"_id": "57890a90e6f5d8ddd46c3f51",
		"name": "Dyer Franklin",
		"email": "dyerfranklin@kyagoro.com",
		"content": "Officia deserunt commodo do consectetur sint labore. Enim laborum excepteur excepteur Lorem qui minim. Ad ullamco excepteur nulla consequat minim culpa et minim dolor dolore ut in. Commodo et velit fugiat ex duis minim commodo duis amet reprehenderit veniam ipsum officia.\r\n"
	},
	{
		"_id": "57890a902b8e04bd7c4e8d16",
		"name": "Wilma Wynn",
		"email": "wilmawynn@kyagoro.com",
		"content": "Nisi ad veniam culpa quis sint magna laborum adipisicing proident aute. Ex cupidatat dolore non veniam mollit ullamco. Nisi id aliquip qui adipisicing id quis nostrud exercitation. Ea tempor ea ea officia ea sit proident incididunt magna fugiat aliquip culpa ipsum. Aute nostrud cupidatat minim est aliqua id anim proident ea anim quis sunt elit. Et nisi aliqua eu non elit. Id ipsum incididunt mollit ea dolor id sint dolor exercitation cillum.\r\n"
	},
	{
		"_id": "57890a90047857e069876fba",
		"name": "Mccullough Jacobson",
		"email": "mcculloughjacobson@kyagoro.com",
		"content": "Est et ex cupidatat ex labore occaecat irure excepteur reprehenderit cupidatat. Consectetur nulla excepteur adipisicing in in id adipisicing et duis cillum ex. Magna elit elit aliqua adipisicing velit eu duis ullamco ex sit irure nisi cillum. Cillum commodo consectetur Lorem non ea sunt officia amet commodo do aute id. Adipisicing anim duis excepteur cupidatat proident culpa commodo eu. Quis voluptate irure dolore pariatur sunt velit amet. Esse consequat id velit commodo sunt cupidatat.\r\n"
	},
	{
		"_id": "57890a90ac0f3b3242ca8a28",
		"name": "Wanda Osborne",
		"email": "wandaosborne@kyagoro.com",
		"content": "Officia laborum qui officia consequat excepteur laborum deserunt in ipsum ut eu laborum nostrud. Duis ea aliqua elit reprehenderit. Incididunt id nisi esse excepteur eu. Consectetur non incididunt in consectetur. Commodo consequat dolore quis irure consequat deserunt occaecat Lorem amet cupidatat deserunt quis commodo. Excepteur dolore tempor aliquip et occaecat ipsum voluptate excepteur non ut Lorem quis.\r\n"
	},
	{
		"_id": "57890a9090077fd34d24e962",
		"name": "Daugherty Pratt",
		"email": "daughertypratt@kyagoro.com",
		"content": "Et quis aliqua do irure. Sunt veniam aliqua dolor aliquip dolore minim magna. Amet exercitation sunt reprehenderit ullamco sit culpa velit magna culpa.\r\n"
	}
];