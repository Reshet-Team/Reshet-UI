import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import { ScrollArea } from './ScrollArea'

export default {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollArea>

type Story = StoryObj<typeof ScrollArea>

export const Vertical: Story = {
  render: function Vertical() {
    const t = useT()
    const paragraphs = [
      t({
        en: 'Vernacular architecture is building done outside any academic tradition, and without professional guidance. It is not a particular architectural movement or style, but rather a broad category, encompassing a wide range and variety of building types, with differing methods of construction, from around the world, both historical and extant and classical and modern.',
        he: 'ארכיטקטורה ורנקולרית היא בנייה הנעשית מחוץ לכל מסורת אקדמית וללא הדרכה מקצועית. זוהי לא תנועה או סגנון אדריכלי ספציפי, אלא קטגוריה רחבה הכוללת מגוון רב של סוגי בניינים, עם שיטות בנייה שונות, מרחבי העולם, הן היסטוריות והן עכשוויות.',
      }),
      t({
        en: "Vernacular architecture constitutes 95% of the world's built environment, as estimated in 1995 by Amos Rapoport, as measured against the small percentage of new buildings every year designed by architects and built by engineers. This type of architecture usually serves immediate, local needs, is constrained by the materials available in its particular region and reflects local traditions and cultural practices.",
        he: 'ארכיטקטורה ורנקולרית מהווה 95% מהסביבה הבנויה בעולם, לפי אומדן משנת 1995 של עמוס רפופורט, בהשוואה לאחוז הקטן של בניינים חדשים המתוכננים על ידי אדריכלים מדי שנה. סוג זה של ארכיטקטורה משרת בדרך כלל צרכים מקומיים מיידיים, מוגבל על ידי החומרים הזמינים באזור הספציפי ומשקף מסורות ופרקטיקות תרבותיות מקומיות.',
      }),
      t({
        en: 'The study of vernacular architecture does not examine formally schooled architects, but instead that of the design skills and tradition of local builders, who were rarely given any attribution for the work. More recently, vernacular architecture has been examined by designers and the building industry in an effort to be more energy conscious with contemporary design and construction—part of a broader interest in sustainable design.',
        he: 'מחקר הארכיטקטורה הורנקולרית אינו בוחן אדריכלים מאומנים פורמלית, אלא את כישורי העיצוב ומסורת הבנאים המקומיים, שלעתים נדירות קיבלו קרדיט על עבודתם. לאחרונה, הארכיטקטורה הורנקולרית נבחנת על ידי מעצבים ותעשיית הבנייה במאמץ להיות מודעים יותר לאנרגיה בתכנון ובנייה עכשווית — חלק מעניין רחב יותר בעיצוב בר-קיימא.',
      }),
    ]
    return (
      <ScrollArea
        style={{
          width: 384,
          height: 160,
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '0.5rem 1.25rem 0.5rem 0.75rem',
          }}
        >
          {paragraphs.map((text, i) => (
            <p key={i} style={{ margin: 0 }}>
              {text}
            </p>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

export const BothAxes: Story = {
  render: () => (
    <ScrollArea orientation='both' style={{ width: 320, height: 320 }}>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 6.25rem)',
          gridTemplateRows: 'repeat(10, 6.25rem)',
          gap: '0.75rem',
          margin: 0,
          padding: '0.75rem 1.5rem 1.5rem 0.75rem',
          listStyle: 'none',
        }}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-bg-elevated)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--color-fg-muted)',
            }}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </ScrollArea>
  ),
}
