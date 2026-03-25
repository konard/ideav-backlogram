import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Code2, 
  Send, Mail, Phone, ExternalLink,  
  ShieldCheck, 
  Database, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Users, 
  Settings2, 
  Cpu,
  Lock,
  Globe,
  FileText,
  BarChart3,
  RefreshCcw,
  MessageSquare
} from 'lucide-react'
import { Link } from 'react-router-dom'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Home() {
  const [formState, setFormState] = React.useState<FormState>('idle')
  const [errorMsg, setErrorMsg]   = React.useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      contact: (form.elements.namedItem('contact') as HTMLInputElement).value,
      task:    (form.elements.namedItem('task')    as HTMLTextAreaElement).value,
    }

    setFormState('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/telegram-notify.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.ok) {
        setFormState('success')
        form.reset()
      } else {
        setFormState('error')
        setErrorMsg(json.error ?? 'Произошла ошибка. Попробуйте позже.')
      }
    } catch {
      setFormState('error')
      setErrorMsg('Не удалось отправить запрос. Проверьте соединение.')
    }
  }

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <Zap size={14} className="fill-current" />
              <span>Low-code для Enterprise</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              Инструмент для <span className="text-blue-500 italic">ускорения</span> бэклога
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
            >
              Разгрузите программистов, не жертвуя контролем. Платформа, которая встраивается в вашу ИТ-среду и реализует проекты быстрее, чем вы успеете написать ТЗ на обычную разработку.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#cta"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group"
              >
                Отправить задачу из бэклога
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#cta"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold rounded-xl transition-all"
              >
                Заказать демо
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Своя разработка — это хорошо, но...</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Программисты тонут в рутине',
                    desc: 'Вместо сложной бизнес-логики команда тратит ресурс на админки, отчеты и справочники.'
                  },
                  {
                    title: 'Бэклог растет бесконечно',
                    desc: 'Скорость поставки падает, а бизнес ждет инструменты месяцами.'
                  },
                  {
                    title: 'Скрытая нагрузка на бюджет',
                    desc: 'Каждый внутренний инструмент требует поддержки, обновления библиотек и ресурсов DevOps.'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-950/40 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono italic">Backlog Status: CRITICAL</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse" />
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-blue-400 font-semibold mb-2">Наше предложение:</p>
                    <p className="text-slate-300">Мы берем на себя задачи, которые не требуют кастомного кода, но съедают ресурс вашей команды.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Section */}
      <section id="technology" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Работаем там, где обычные конструкторы «падают»</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic">Это не «конструктор для менеджеров». Это промышленная платформа.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Не тормозит на объемах',
                desc: 'Протестировано на сотнях миллионов записей. Ваши корпоративные объемы — это штатный режим для QDM.'
              },
              {
                icon: Layers,
                title: 'Любая сложность данных',
                desc: 'Связи, рекурсия и вложенные запросы без ручного кодирования. Реальная замена традиционной БД.'
              },
              {
                icon: ShieldCheck,
                title: 'Безопасность на уровне ядра',
                desc: 'Ролевая модель к таблицам, колонкам и записям. Журналы событий и контрольные точки — из коробки.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for further sections... */}
      {/* 4. Model of Interaction */}
      <section id="process" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Пришлите задачу. Мы сделаем её работающим приложением.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Ваш бэклог — наш приоритет. От идеи до эксплуатации в корпоративном контуре.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-800 -z-10" />
            
            {[
              {
                step: '01',
                title: 'Выбор задачи',
                desc: 'Вы выбираете любой проект из бэклога: учет, согласование, отчетность, справочники или админки.'
              },
              {
                step: '02',
                title: 'Проектирование',
                desc: 'Мы анализируем требования и разворачиваем решение на платформе «Интеграм» под ваши нужды.'
              },
              {
                step: '03',
                title: 'Готовый инструмент',
                desc: 'Вы получаете приложение с SSO, API, аудитом и интерфейсом в корпоративном стиле.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative group"
              >
                <div className="text-4xl font-black text-slate-900 group-hover:text-blue-500/10 transition-colors absolute top-4 right-6 leading-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-100 group-hover:text-blue-500 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-blue-600/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <CheckCircle2 size={24} />
            </div>
            <p className="text-slate-300 text-lg">
              Результат — <span className="text-slate-100 font-bold">100% кастомизированное коробочное решение</span>, которое живет внутри вашего контура и не требует команды сопровождения.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Analysts not Programmers */}
      <section className="py-24 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                { icon: RefreshCcw, label: 'SQL Конструктор', sub: 'Включая рекурсию' },
                { icon: FileText, label: 'Формы и отчеты', sub: 'Без кодирования' },
                { icon: Globe, label: 'Импорт/Экспорт', sub: 'Excel, JSON, API' },
                { icon: Lock, label: 'Ролевая модель', sub: 'Настройка без кода' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 mb-4">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-100 mb-1">{item.label}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Изменения вносятся бизнес-аналитиками, а не программистами</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Ваши ИТ-ресурсы перестают тратить время на правки отчетов и интерфейсов. Этим занимаются аналитики или бизнес-пользователи в рамках их полномочий.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>Снижение Time-to-Market для минорных правок</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>Полный аудит всех изменений логики</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Integration Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мы не заменяем, мы дополняем</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Инструмент, который бесшовно встраивается в ваш существующий ИТ-ландшафт.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: 'API наружу и внутрь', desc: 'Настройка коннекторов без программирования.' },
              { icon: Users, title: 'Active Directory / SSO', sub: 'Интеграция с корпоративными методами аутентификации.' },
              { icon: BarChart3, title: 'Мониторинг и Аудит', sub: 'Выгрузка данных в ваши системы (ELK, Zabbix и др.)' },
              { icon: Settings2, title: 'On-premise / Cloud', sub: 'Работа на вашем контуре для полной безопасности.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-800 bg-slate-950 hover:border-slate-700 transition-all text-center">
                <div className="mx-auto w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc || item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study Section */}
      <section id="cases" className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Пример из практики: Управление процессами ПДн</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Как платформа справилась с задачей уровня банка и жесткой регуляторики.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl border border-slate-800 bg-slate-950/80 shadow-xl">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                  Контекст проекта
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Крупный банк с тысячами сотрудников и десятками разрозненных ИТ-систем.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/10 text-red-500 flex items-center justify-center">
                      <ArrowRight size={14} className="rotate-45" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Задача:</h4>
                      <p className="text-sm text-slate-400">Централизованный учет ПДн, версионность, согласование и интеграция с аудитом.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Реализация:</h4>
                      <p className="text-sm text-slate-400">Реестр процессов, автоматическая отчетность без кодинга, встроенная ролевая модель.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 text-center">
                  <div className="text-3xl font-black text-blue-500 mb-2">1–3</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">месяца на внедрение</div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 text-center">
                  <div className="text-3xl font-black text-blue-500 mb-2">590к</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">₽ под ключ</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
              <div className="p-2 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-800 shadow-2xl">
                <div className="bg-slate-900 rounded-[1.5rem] overflow-hidden">
                  <div className="h-10 bg-slate-950 flex items-center px-6 gap-2 border-b border-slate-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <div className="ml-auto flex items-center gap-4">
                      <div className="w-32 h-1.5 bg-slate-800 rounded-full" />
                      <div className="w-8 h-4 rounded bg-blue-600/20" />
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded bg-slate-800 animate-pulse" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-1/3 bg-slate-800 rounded" />
                        <div className="h-3 w-1/2 bg-slate-800 rounded" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-slate-800 rounded-full" />
                      <div className="h-2 w-full bg-slate-800 rounded-full" />
                      <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-20 bg-slate-800/50 rounded-xl border border-slate-800" />
                      <div className="h-20 bg-slate-800/50 rounded-xl border border-slate-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Ready Projects Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовые типы проектов для вашего бэклога</h2>
            <p className="text-slate-400">Любая из этих задач может быть реализована как полноценное веб-приложение.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Системы учета договоров и платежей',
              'Управление заявками и инцидентами',
              'Реестры и справочники с версионностью',
              'Админки для смежных систем',
              'Отчетность и дашборды с ролями',
              'Инвентаризация и учет оборудования',
              'Бюджетирование и согласование',
              'Центры управления НСИ',
              'Анкеты и опросы сотрудников'
            ].map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 flex items-center gap-4 bg-slate-900/30 border border-slate-800 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900/50 transition-all cursor-default group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-300 font-medium">{task}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как начать без риска</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic italic">Прозрачные условия для пилота и эксплуатации.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-950 flex flex-col hover:border-slate-700 transition-all">
              <h3 className="text-xl font-bold mb-2">Пилотный проект</h3>
              <p className="text-slate-500 text-sm mb-6">Для проверки на реальной задаче</p>
              <div className="mb-6">
                <span className="text-slate-400 text-sm uppercase font-bold tracking-widest">Сроки:</span>
                <div className="text-2xl font-bold text-slate-100 mt-1">4–8 недель</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Выбор задачи из бэклога', 'Полный цикл разработки', 'Развертывание в контуре', 'Инструкции и доки'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-slate-900 border border-slate-800 hover:border-slate-600 text-white font-bold rounded-xl transition-all">
                Выбрать задачу
              </button>
            </div>

            <div className="p-8 rounded-3xl border-2 border-blue-600 bg-slate-950 relative flex flex-col shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                Популярно
              </div>
              <h3 className="text-xl font-bold mb-2">Локальная лицензия</h3>
              <p className="text-slate-500 text-sm mb-6">On-premise установка (год)</p>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">290 000</span>
                <span className="text-slate-500 text-xl font-bold">₽</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Неограниченное кол-во записей', 'Полный API функционал', 'Приоритетная поддержка', 'Любые коннекторы'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
                Оформить подписку
              </button>
            </div>

            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-950 flex flex-col hover:border-slate-700 transition-all">
              <h3 className="text-xl font-bold mb-2">Разработка</h3>
              <p className="text-slate-500 text-sm mb-6">Аналитика и кастомизация</p>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">3 750</span>
                <span className="text-slate-500 text-xl font-bold">₽/час</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Системный аналитик QDM', 'Настройка сложных интеграций', 'Кастомизация UI/UX', 'Обучение сотрудников'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-slate-900 border border-slate-800 hover:border-slate-600 text-white font-bold rounded-xl transition-all">
                Уточнить условия
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Team Roles Section */}
      <section className="py-24 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Кто работает над вашей задачей</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Мы предоставляем экспертов, которые знают платформу и понимают бизнес-процессы.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Системный аналитик</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Сбор требований, проектирование структур данных и логики процессов. Переводит бизнес-язык в архитектуру QDM.
                </p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Settings2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Разработчик платформы</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Настройка логики, интеграций и интерфейсов. Обеспечивает бесшовную работу приложения в вашем контуре.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-slate-500 text-sm italic">
            Результат сдается в виде готового приложения, полной технической документации и пользовательских инструкций.
          </div>
        </div>
      </section>

      {/* 11. Final CTA Form */}
      <section id="cta" className="py-24 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-950 p-12 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -z-10" />
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Готовы разгрузить свой бэклог?</h2>
              <p className="text-slate-400 text-lg mb-8">
                Пришлите описание задачи или проект из очереди. Мы сделаем предварительную оценку архитектуры и сроков за 24 часа.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Telegram</div>
                    <a href="https://t.me/qdmadept" className="text-slate-200 hover:text-blue-500 font-bold transition-colors">@qdmadept</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</div>
                    <a href="mailto:abc@integram.io" className="text-slate-200 hover:text-blue-500 font-bold transition-colors">abc@integram.io</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Имя</label>
                    <input name="name" type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-blue-500 outline-none transition-all" placeholder="Александр" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Компания</label>
                    <input name="company" type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-blue-500 outline-none transition-all" placeholder="Digital Corp" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email / Telegram</label>
                  <input name="contact" type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-blue-500 outline-none transition-all" placeholder="@username" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Задача (коротко)</label>
                  <textarea name="task" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Нужно перенести учет ПДн из Excel..." />
                </div>

                {formState === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <CheckCircle2 size={16} />
                    Заявка отправлена! Мы свяжемся с вами в течение 24 часов.
                  </div>
                )}
                {formState === 'error' && (
                  <div className="text-red-400 text-sm font-medium">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'sending' || formState === 'success'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {formState === 'sending' ? 'Отправка...' : 'Отправить на оценку'}
                  {formState !== 'sending' && <Send size={18} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
