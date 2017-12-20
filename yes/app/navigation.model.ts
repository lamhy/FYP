export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'pages',
                'title'   : 'Pages',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'home',
                        'title': 'Home',
                        'type' : 'item',
                        'icon' : 'home',
                        'url'  : '/sample',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'info',
                        'title': 'Useful info',
                        'type' : 'item',
                        'icon' : 'info',
                        'url'  : '/info',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'find_instructor',
                        'title': 'Find an instructor',
                        'type' : 'item',
                        'icon' : 'people',
                        'url'  : '/find_instructor',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'test',
                        'title': 'Written test exercise',
                        'type' : 'item',
                        'icon' : 'toc',
                        'url'  : '/test',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'shopping',
                        'title': 'Shopping',
                        'type' : 'item',
                        'icon' : 'add_shopping_cart',
                        'url'  : '/shopping',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'forum',
                        'title': 'Forum',
                        'type' : 'item',
                        'icon' : 'forum',
                        'url'  : '/forum',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    }
                ]
            },
            {
                'id'      : 'membership',
                'title'   : 'Membership',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'login',
                        'title': 'Login',
                        'type' : 'item',
                        'icon' : 'person_pin',
                        'url'  : '/login-2',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'register',
                        'title': 'Register as member',
                        'type' : 'item',
                        'icon' : 'person_add',
                        'url'  : '/register-2',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'contact',
                        'title': 'Contact us',
                        'type' : 'item',
                        'icon' : 'contact_mail',
                        'url'  : '/contact',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                        'id'   : 'follow',
                        'title': 'Follow us',
                        'type' : 'item',
                        'icon' : 'link',
                        'url'  : '/follow',
                        // 'badge': {
                        //     'title': 25,
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    }
                ]
            }
        ];
    }
}
