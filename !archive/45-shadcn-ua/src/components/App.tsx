import { useEffect, useState } from 'react'
import {
  BellIcon,
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  LayersIcon,
  LayoutGridIcon,
  ListIcon,
  LogOutIcon,
  MailIcon,
  MenuIcon,
  MessageSquareIcon,
  MoonIcon,
  PaletteIcon,
  PlusIcon,
  RotateCcwIcon,
  SendIcon,
  SettingsIcon,
  SparklesIcon,
  SunIcon,
  TableIcon,
  UserIcon,
  ZapIcon,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toaster, toast } from '@/components/ui/toast'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const frameworks = [
  { label: 'React + Vite', value: 'vite' },
  { label: 'Next.js', value: 'next' },
  { label: 'React Router', value: 'router' },
  { label: 'Astro', value: 'astro' },
]

const App = () => {
  const [dark, setDark] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [framework, setFramework] = useState('vite')
  const [about, setAbout] = useState('')
  const [budget, setBudget] = useState<number[]>([40])
  const [notify, setNotify] = useState(true)
  const [agree, setAgree] = useState(false)
  const [view, setView] = useState<string[]>(['cards'])
  const [tab, setTab] = useState('buttons')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [tried, setTried] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const nameInvalid = tried && name.trim().length < 2
  const emailInvalid = tried && !/^\S+@\S+\.\S+$/.test(email.trim())
  const agreeInvalid = tried && !agree

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTried(true)
    if (name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email.trim()) || !agree) {
      toast.add({
        title: 'Перевірте форму',
        description: 'Заповніть імʼя, коректний email і підтвердьте згоду.',
        type: 'warning',
      })
      return
    }
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSent(true)
      toast.add({
        title: 'Проєкт створено',
        description: `Дякуємо${name ? `, ${name}` : ''}! Налаштування застосовано.`,
        type: 'success',
      })
    }, 900)
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setAbout('')
    setBudget([40])
    setAgree(false)
    setSent(false)
    setTried(false)
  }

  const showSnackbar = () => {
    toast.add({
      title: 'Це Snackbar у стилі Material',
      description: 'Живе сповіщення з анімацією появи та свайпом.',
      type: 'info',
    })
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* ── AppBar у дусі Material ─────────────────────────── */}
        <header className="sticky top-0 isolate border-b bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="md:hidden" />
                }
              >
                <MenuIcon />
                <span className="sr-only">Відкрити меню</span>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Навігація</SheetTitle>
                  <SheetDescription>
                    Бічне меню у стилі Material Drawer.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4">
                  {['Огляд', 'Форма', 'Компоненти', 'Діалог'].map((item) => (
                    <Button key={item} variant="ghost" className="justify-start">
                      {item}
                    </Button>
                  ))}
                </div>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" />}>
                    Закрити
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <LayersIcon data-icon="inline-start" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-semibold">Промінь UI</span>
              <span className="text-xs text-muted-foreground">
                Material × shadcn
              </span>
            </div>
            <Badge variant="secondary" className="ml-1 hidden sm:inline-flex">
              <SparklesIcon data-icon="inline-start" />
              demo
            </Badge>
            <NavigationMenu className="ml-4 hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<a href="#form" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    Форма
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Компоненти</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-96 gap-1 p-2">
                      <li>
                        <NavigationMenuLink render={<a href="#showcase" />}>
                          <span className="font-medium">Вітрина</span>
                          <span className="line-clamp-2 text-sm text-muted-foreground">
                            Кнопки, бейджі, вкладки, прогрес і підказки.
                          </span>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink render={<a href="#dialog" />}>
                          <span className="font-medium">Діалог</span>
                          <span className="line-clamp-2 text-sm text-muted-foreground">
                            Анімований модальний діалог з формою.
                          </span>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<a href="#faq" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    FAQ
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger
                  render={<Button variant="ghost" size="icon" />}
                  onClick={() => setDark((v) => !v)}
                >
                  {dark ? <SunIcon /> : <MoonIcon />}
                  <span className="sr-only">Перемкнути тему</span>
                </TooltipTrigger>
                <TooltipContent>Світла / темна тема</TooltipContent>
              </Tooltip>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button variant="ghost" size="icon" />}
                >
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Профіль"
                    />
                    <AvatarFallback>ПУ</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Меню профілю</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Олена Коваль</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <UserIcon />
                      Профіль
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Тариф
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SettingsIcon />
                      Налаштування
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                      <LogOutIcon />
                      Вийти
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Dialog>
                <DialogTrigger render={<Button className="hidden sm:inline-flex" />}>
                  <PlusIcon data-icon="inline-start" />
                  Створити
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg" id="dialog">
                  <DialogHeader>
                    <DialogTitle>Новий проєкт</DialogTitle>
                    <DialogDescription>
                      Анімований діалог: поява з масштабуванням і затемненням
                      фону. Натисніть Esc або кнопку, щоб закрити.
                    </DialogDescription>
                  </DialogHeader>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="dialog-name">
                        Назва проєкту
                      </FieldLabel>
                      <Input id="dialog-name" placeholder="Промінь 2.0" />
                      <FieldDescription>
                        Коротка назва, до 32 символів.
                      </FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="dialog-about">Опис</FieldLabel>
                      <Textarea
                        id="dialog-about"
                        placeholder="Матеріальний дашборд українською…"
                      />
                    </Field>
                  </FieldGroup>
                  <DialogFooter>
                    <DialogClose render={<Button variant="outline" />}>
                      Скасувати
                    </DialogClose>
                    <Button
                      onClick={() =>
                        toast.add({
                          title: 'Чернетку збережено',
                          description: 'Діалог закриється після підтвердження.',
                          type: 'success',
                        })
                      }
                    >
                      <CheckIcon data-icon="inline-start" />
                      Підтвердити
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Progress value={sent ? 100 : 62}>
            <ProgressLabel className="sr-only">Прогрес демо</ProgressLabel>
            <ProgressValue className="sr-only" />
          </Progress>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16">
          {/* ── Hero ─────────────────────────────────────────── */}
          <section className="bg-dots animate-rise flex flex-col items-start gap-4 rounded-3xl border bg-card/60 px-6 py-10 shadow-sm md:px-10">
            <div className="flex flex-wrap gap-2">
              <Badge>
                <SparklesIcon data-icon="inline-start" />
                shadcn/ui · base
              </Badge>
              <Badge variant="secondary">Material-натхненний</Badge>
              <Badge variant="outline">Анімації з коробки</Badge>
            </div>
            <h1 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Живий інтерфейс без Material UI — лише shadcn і Tailwind
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Верхнє меню, бічний Drawer, анімований діалог, Snackbar-тости,
              тактильні кнопки й форма з валідацією. Усе зібрано з нативних
              компонентів shadcn.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="lg" render={<a href="#form" />}>
                <ZapIcon data-icon="inline-start" />
                Спробувати форму
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={showSnackbar}
              >
                <BellIcon data-icon="inline-start" />
                Показати Snackbar
              </Button>
            </div>
          </section>

          {/* ── Форма + бічна панель ─────────────────────────── */}
          <div className="grid items-start gap-6 lg:grid-cols-5">
            <Card id="form" className="animate-rise lg:col-span-3">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Крок 1 з 1</Badge>
                  <Badge variant="outline">Валідація</Badge>
                </div>
                <CardTitle>Створити проєкт</CardTitle>
                <CardDescription>
                  TextField з іконками, селект, слайдер бюджету й перемикачі —
                  як у Material, але на shadcn.
                </CardDescription>
                <CardAction>
                  <Tooltip>
                    <TooltipTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <InfoIcon />
                      <span className="sr-only">Підказка</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      Усі поля зібрані через FieldGroup + Field
                    </TooltipContent>
                  </Tooltip>
                </CardAction>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <FieldGroup>
                    <Field data-invalid={nameInvalid}>
                      <FieldLabel htmlFor="name">Імʼя</FieldLabel>
                      <InputGroup>
                        <InputGroupAddon align="inline-start">
                          <UserIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                          id="name"
                          placeholder="Олена"
                          value={name}
                          aria-invalid={nameInvalid}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>
                      {nameInvalid ? (
                        <FieldError>Введіть щонайменше 2 символи.</FieldError>
                      ) : (
                        <FieldDescription>
                          Так до вас звертатимуться в інтерфейсі.
                        </FieldDescription>
                      )}
                    </Field>
                    <Field data-invalid={emailInvalid}>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <InputGroup>
                        <InputGroupAddon align="inline-start">
                          <MailIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                          id="email"
                          type="email"
                          placeholder="olena@example.com"
                          value={email}
                          aria-invalid={emailInvalid}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                      {emailInvalid ? (
                        <FieldError>
                          Введіть коректну адресу, наприклад name@mail.com.
                        </FieldError>
                      ) : (
                        <FieldDescription>
                          Сюди надійде запрошення до проєкту.
                        </FieldDescription>
                      )}
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="framework">
                          Стек проєкту
                        </FieldLabel>
                        <Select
                          items={frameworks}
                          value={framework}
                          onValueChange={(v) => setFramework(v as string)}
                        >
                          <SelectTrigger id="framework" className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {frameworks.map((f) => (
                                <SelectItem key={f.value} value={f.value}>
                                  {f.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="budget">
                          Бюджет: {budget[0]}%
                        </FieldLabel>
                        <Slider
                          id="budget"
                          value={budget}
                          onValueChange={(v) =>
                            setBudget(Array.isArray(v) ? [...v] : [v])
                          }
                          min={0}
                          max={100}
                        />
                        <FieldDescription>
                          Material-слайдер для розподілу ресурсів.
                        </FieldDescription>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="about">Про проєкт</FieldLabel>
                      <Textarea
                        id="about"
                        placeholder="Кілька слів про ідею…"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                    </Field>
                    <FieldSeparator>Налаштування</FieldSeparator>
                    <FieldSet>
                      <FieldLegend>Сповіщення</FieldLegend>
                      <Field orientation="horizontal">
                        <FieldLabel htmlFor="notify" className="font-normal">
                          Push-сповіщення про оновлення
                        </FieldLabel>
                        <Switch
                          id="notify"
                          checked={notify}
                          onCheckedChange={setNotify}
                        />
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="agree"
                          checked={agree}
                          aria-invalid={agreeInvalid}
                          onCheckedChange={(c) => setAgree(c === true)}
                        />
                        <FieldLabel htmlFor="agree" className="font-normal">
                          Погоджуюсь з умовами демо
                        </FieldLabel>
                      </Field>
                      {agreeInvalid && (
                        <FieldError>
                          Підтвердіть згоду, щоб продовжити.
                        </FieldError>
                      )}
                    </FieldSet>
                    <Field>
                      <FieldLabel>Вигляд списку</FieldLabel>
                      <ToggleGroup value={view} onValueChange={setView}>
                        <ToggleGroupItem value="cards">
                          <LayoutGridIcon data-icon="inline-start" />
                          Картки
                        </ToggleGroupItem>
                        <ToggleGroupItem value="table">
                          <TableIcon data-icon="inline-start" />
                          Таблиця
                        </ToggleGroupItem>
                        <ToggleGroupItem value="list">
                          <ListIcon data-icon="inline-start" />
                          Список
                        </ToggleGroupItem>
                      </ToggleGroup>
                      <FieldDescription>
                        Segmented-кнопки як у Material 3.
                      </FieldDescription>
                    </Field>
                  </FieldGroup>
                  <Separator />
                  <div className="flex flex-wrap gap-2">
                    <Button type="submit" disabled={sending}>
                      {sending && <Spinner data-icon="inline-start" />}
                      {sending ? 'Створюємо…' : 'Створити проєкт'}
                      {!sending && <SendIcon data-icon="inline-end" />}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleReset}
                    >
                      <RotateCcwIcon data-icon="inline-start" />
                      Очистити
                    </Button>
                  </div>
                  {sent && (
                    <Alert>
                      <CheckIcon />
                      <AlertTitle>Готово!</AlertTitle>
                      <AlertDescription>
                        Проєкт «{name || 'Без назви'}» створено на стеку{' '}
                        {frameworks.find((f) => f.value === framework)?.label}
                        . Режим перегляду:{' '}
                        {view.length > 0 ? view.join(', ') : 'не обрано'}.
                      </AlertDescription>
                    </Alert>
                  )}
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Кнопка показує Spinner під час «збереження», помилки
                  підсвічуються через data-invalid + aria-invalid.
                </p>
              </CardFooter>
            </Card>

            {/* ── Бічна панель ───────────────────────────────── */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <Card className="animate-rise">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-11">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Олена Коваль"
                      />
                      <AvatarFallback>ОК</AvatarFallback>
                    </Avatar>
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate font-medium">
                        Олена Коваль
                      </span>
                      <span className="truncate text-sm text-muted-foreground">
                        дизайнерка інтерфейсів
                      </span>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      PRO
                    </Badge>
                  </div>
                  <CardTitle className="pt-2">Прогрес команди</CardTitle>
                  <CardDescription>
                    Лінійний індикатор у стилі Material.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <Progress value={sent ? 100 : 62}>
                    <ProgressLabel>Готовність релізу</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                  <div className="flex flex-wrap gap-2">
                    <Badge>+12% за тиждень</Badge>
                    <Badge variant="outline">3 активні задачі</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={showSnackbar}
                  >
                    <BellIcon data-icon="inline-start" />
                    Нагадати команді
                  </Button>
                </CardFooter>
              </Card>

              <Card className="animate-rise">
                <CardHeader>
                  <CardTitle>Швидкі дії</CardTitle>
                  <CardDescription>
                    Тактильні кнопки з натисканням і тінями.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Button variant="outline">
                    <PaletteIcon data-icon="inline-start" />
                    Теми
                  </Button>
                  <Button variant="ghost">
                    <SettingsIcon data-icon="inline-start" />
                    Налаштування
                  </Button>
                  <Button variant="destructive">
                    <LogOutIcon data-icon="inline-start" />
                    Вийти
                  </Button>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Варіанти default, secondary, outline, ghost і destructive.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* ── Вітрина компонентів ──────────────────────────── */}
          <Card id="showcase" className="animate-rise">
            <CardHeader>
              <CardTitle>Вітрина компонентів</CardTitle>
              <CardDescription>
                Вкладки, як у Material Tabs з індикатором.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={tab} onValueChange={setTab}>
                <TabsList>
                  <TabsTrigger value="buttons">Кнопки</TabsTrigger>
                  <TabsTrigger value="nav">Навігація</TabsTrigger>
                  <TabsTrigger value="feedback">Фідбек</TabsTrigger>
                </TabsList>
                <TabsContent value="buttons" className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button size="sm" variant="secondary">
                      Secondary
                    </Button>
                    <Button size="sm" variant="outline">
                      Outline
                    </Button>
                    <Button size="sm" variant="ghost">
                      Ghost
                    </Button>
                    <Button size="sm" variant="destructive">
                      Destructive
                    </Button>
                    <Button size="sm" disabled>
                      <Spinner data-icon="inline-start" />
                      Завантаження
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Нове</Badge>
                    <Badge variant="secondary">Бета</Badge>
                    <Badge variant="outline">Стабільно</Badge>
                    <Badge variant="destructive">Терміново</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Активна вкладка: {tab}. Кнопки мають пресовану анімацію —
                    натисніть і потримайте.
                  </p>
                </TabsContent>
                <TabsContent value="nav" className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={<Button variant="outline" />}
                      >
                        <MenuIcon data-icon="inline-start" />
                        Меню дій
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Дії</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <UserIcon />
                            Профіль
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquareIcon />
                            Повідомлення
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <SettingsIcon />
                            Налаштування
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem variant="destructive">
                            <LogOutIcon />
                            Вийти
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Tooltip>
                      <TooltipTrigger
                        render={<Button variant="secondary" />}
                      >
                        <InfoIcon data-icon="inline-start" />
                        З підказкою
                      </TooltipTrigger>
                      <TooltipContent>
                        Tooltip зʼявляється з масштабуванням
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    DropdownMenu групує пункти в DropdownMenuGroup з
                    роздільниками, а Tooltip додає контекст.
                  </p>
                </TabsContent>
                <TabsContent value="feedback" className="flex flex-col gap-4">
                  <Alert>
                    <InfoIcon />
                    <AlertTitle>Порада</AlertTitle>
                    <AlertDescription>
                      Toast знизу екрана — аналог Material Snackbar. Спробуйте
                      кнопку «Показати Snackbar» у hero-блоці.
                    </AlertDescription>
                  </Alert>
                  <Progress value={sent ? 100 : 62}>
                    <ProgressLabel>Синхронізація</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* ── FAQ ──────────────────────────────────────────── */}
          <Card id="faq" className="animate-rise">
            <CardHeader>
              <CardTitle>Часті питання</CardTitle>
              <CardDescription>
                Акордеон з плавною анімацією розгортання.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion defaultValue={['q1']}>
                <AccordionItem value="q1">
                  <AccordionTrigger>Це справжній Material UI?</AccordionTrigger>
                  <AccordionContent>
                    Ні. Це shadcn-компоненти на Base UI з Tailwind-стилями,
                    скомпоновані в дусі Material: AppBar, Drawer, Snackbar,
                    сегментовані кнопки й тактильні анімації.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>Звідки анімації?</AccordionTrigger>
                  <AccordionContent>
                    Діалог масштабується, Drawer виїжджає збоку, тости
                    стекуються й закриваються свайпом, вкладки й акордеон
                    transitionʼяться — усе з tw-animate-css і Base UI.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>А темна тема?</AccordionTrigger>
                  <AccordionContent>
                    Перемикач із сонцем/місяцем у шапці додає клас .dark —
                    усі семантичні токени перефарбовуються автоматично.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <footer className="flex flex-col gap-3">
            <Separator />
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline">Промінь UI</Badge>
              <span className="truncate">
                Зібрано з Dialog, Sheet, NavigationMenu, Tabs, Toast, Form і ще
                15 компонентів shadcn.
              </span>
            </div>
          </footer>
        </main>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}

export default App
